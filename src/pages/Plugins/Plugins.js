import React from 'react';

import { Button } from 'react-bootstrap';

import DropZoneMultipleFiles from '../../components/UI/DropZone/DropZoneMultipleFiles';
import DropZoneSingleFile from '../../components/UI/DropZone/DropZoneSingleFile';
import PencilSVG from '../../components/SVGs/PencilSVG';
import BigCenteredModal from '../../components/UI/Modal/BigCenteredModal';
import sheetsToOneSheet from '../../assets/SVGs/Sheets_to_one_sheet.svg';
import wbsToOneSheet from '../../assets/SVGs/WB_to_one_sheet.svg';

import styles from './Plugins.module.css';

const excelFileTypes = 'application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

const Plugins = props => {
    const [modalCombineWBSheetsShow, setModalCombineWBSheetsShow] = React.useState(false);
    const [modalCombineSheetsShow, setModalCombineSheetsShow] = React.useState(false);

    return (
        <div className={styles.PluginsComponentContainer} >
            <div className={styles.TextContainer} >
                <h3 className={styles.ImageHeader}>Image Plugins</h3>
            </div>
            <PencilSVG />
            <div className={styles.TextContainer} >
                <h3 className={styles.ExcelHeader}>Excel Plugins</h3>
                <div className={styles.TextBox}>
                    <p className={styles.ExcelText}>Combine multiple Excel workbooks<br />
            with same sheet style and name<br />
            into one Excel sheet.
            </p>
                    <Button
                        className="excel-btn"
                        onClick={() => setModalCombineWBSheetsShow(true)}
                    >Combine WB Sheets</Button>
                </div>
                <BigCenteredModal
                    show={modalCombineWBSheetsShow}
                    onHide={() => setModalCombineWBSheetsShow(false)}
                    title="Multiple WorkBooks' Sheet Combiner"
                    body={<img width="60%" src={wbsToOneSheet} alt="wbsToOneSheet" />}
                    dropzone={<DropZoneMultipleFiles
                        acceptedFiles={excelFileTypes}
                        maxFileQty={3}
                        maxFileSize={10}
                        droptext={"Drag 'n' drop some files here, or click to select files"}
                        dropnote={"(Only *.xlsx and *.xls files will be accepted)"}
                        file_type_error={"Please upload only .xls or .xlsx files!"}
                    />}
                />
                <div className={styles.TextBox}>
                    <p className={styles.ExcelText}>Combine multiple Excel sheets<br />
            with same sheet style into one<br /> Excel sheet.
            </p>
                    <Button
                        className="excel-btn"
                        onClick={() => setModalCombineSheetsShow(true)}
                    >Combine Sheets</Button>
                    <BigCenteredModal
                        show={modalCombineSheetsShow}
                        onHide={() => setModalCombineSheetsShow(false)}
                        title="Multiple Sheets Combiner"
                        body={<img width="70%" src={sheetsToOneSheet} alt="sheetsToOneSheet" />}
                        dropzone={<DropZoneSingleFile
                        acceptedFiles={excelFileTypes}
                        maxSize={10}
                        droptext={"Drag 'n' drop file here, or click to select file"}
                        dropnote={"(Only *.xlsx or *.xls file will be accepted)"}
                        file_type_error={"Please upload only .xls or .xlsx file!"}
                    />}

                    />
                </div>
            </div>
        </div>
    );
}

export default Plugins;