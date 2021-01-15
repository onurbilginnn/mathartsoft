import React, {useEffect, useState} from 'react';
import { InputGroup, Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';

import './dropzone.css';

const DropZoneSingleFile = props => {
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: props.acceptedFiles,
        maxFiles: 1,
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

    useEffect(() => {
        if(acceptedFileItems.length > 0) {
            setIsBtnDisabled(false);
        } else {
            setIsBtnDisabled(true);
        }
    }, [acceptedFileItems]);

    console.log(acceptedFileItems);
    
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
                    <InputGroup.Append>
                        <Button variant="outline-primary" disabled={isBtnDisabled}>Upload</Button>
                    </InputGroup.Append>
                </InputGroup>
            </aside>
        </section>
    );
}

export default DropZoneSingleFile;