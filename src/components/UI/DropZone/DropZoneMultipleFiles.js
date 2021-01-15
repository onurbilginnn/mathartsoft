import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import fileSaver from 'file-saver';
import axios from 'axios';

import './dropzone.css';

const DropZoneMultipleFiles = props => {
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    const [sheetName, setSheetName] = useState();

    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: props.acceptedFiles,
        maxFiles: props.maxFileQty,
        maxSize: props.maxFileSize * 1024 * 1024
    });

    const acceptedFileItems = acceptedFiles.map(file => {
        return (<li key={file.path}>
            {file.path} - {file.size} bytes  - will be uploaded.
        </li>);
    });

    const fileRejectionItems = fileRejections.map(({ file, errors }) => {
        switch (errors[0].code) {
            case 'file-invalid-type':
                return props.file_type_error;
            case 'file-too-large':
                return 'Total file size is too large!';
            case 'file-too-small':
                return 'Total file size is too small!';
            case 'too-many-files':
                return 'Total file quantity limit exceeded!';
            default:
                return 'Unknown error!';
        }
    });

    const changeInputHandler = event => {
        if (event.target.value) {
            setIsBtnDisabled(false);
        } else {
            setIsBtnDisabled(true);
        }
        setSheetName(event.target.value);
    }

    const onUploadHandler = async () => {
        const url = `http://localhost:8080/plugins/multiExcelWBs`;
        const formData = new FormData();

        if (sheetName && acceptedFiles.length > 0) {

            for (let file in acceptedFiles) {
                formData.append('files', acceptedFiles[file]);
            }

            formData.append('sheetName', sheetName);

            await axios({
                method: 'POST',
                url: url,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
                data: formData
            }).then(response => {
               console.log(response);
            })
                .catch(error => {
                    console.log(error.message);
                });
        } else {
            return;
        }
    }

    return (
        <section className="container">
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>{props.droptext}</p>
                <em>{props.dropnote}</em>
            </div>
            <aside>
                <ul className="dropzone-list mt-3 text-success">{acceptedFileItems}</ul>
                <ul className="dropzone-list mt-3 text-danger">{fileRejectionItems[0]}</ul>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Sheet Name to Merge"
                        aria-label="Sheet Name"
                        aria-describedby="basic-addon2"
                        disabled={acceptedFileItems.length === 0}
                        onChange={changeInputHandler}
                    />
                    <InputGroup.Append>
                        <Button
                            variant="outline-primary"
                            disabled={isBtnDisabled}
                            onClick={onUploadHandler}>Upload</Button>
                    </InputGroup.Append>
                </InputGroup>
            </aside>
        </section>
    );
}

export default DropZoneMultipleFiles;