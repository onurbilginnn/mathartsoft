import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

import OnOffBtn from '../../../components/UI/OnOffBtn/OnOffBtn';
import Table from '../../../components/UI/Table/Table';
import { fillMatrixNormal, fillMatrixSpiral } from '../../../utility/math/math';

import styles from './PrimeNumbers.module.css';

const PrimeNumbers = props => {
   const [matrixSize, setMatrixSize] = useState(0);
   const [tableRows, setTableRows] = useState([]);
   const [tableStyle, setTableStyle] = useState('table borderless');

   const matrixSizeHandler = event => {
      setMatrixSize(event.target.value);
   };

   let rows = [];
   let tableRowData = [];

   const createMatrixHandler = () => {
         rows = fillMatrixNormal(matrixSize, tableRowData);
      setTableRows(rows);
   }

   const matrixToggleHandler = checked => {
      if(!checked) {
         rows = fillMatrixNormal(matrixSize, tableRowData);
      } else {
         rows = fillMatrixSpiral(matrixSize);

      }
      setTableRows(rows);
   }

   const borderToggleHandler = checked => {
      if(!checked) {
         setTableStyle('table borderless')
      } else {
         setTableStyle('table table-bordered');
      }
   }

   const colorsToggleHandler = () => {
      
   }

   const clearMatrixHandler = () => {
      setTableRows([]);
   }

   return (
      <div className={styles.PrimeNumbersContainer + " " + { ...props.classes }} >
         <InputGroup className="mb-3 col-md-3">

            <FormControl
               placeholder="Matrix Size"
               aria-label="Matrix Size"
               aria-describedby="basic-addon2"
               onChange={matrixSizeHandler}
            />
            <InputGroup.Append>
               <Button onClick={createMatrixHandler} disabled={!matrixSize || matrixSize <= 0} >Calculate</Button>
               <Button className="ml-3" onClick={clearMatrixHandler} variant="danger" disabled={tableRows.length === 0} >Clear</Button>
            </InputGroup.Append>
         </InputGroup>
         {tableRows.length > 0 && <div className={styles.TableBtnsContainer + " m-3" }>
               <OnOffBtn
                  label="Spiral Numbers:"
                  onChanged={matrixToggleHandler}
                  size="sm"
               />
                  <OnOffBtn
                  label="Bordered Table:"
                  onChanged={borderToggleHandler}
                  size="sm"
               />      <OnOffBtn
                  label="Colored Numbers:"
                  onChanged={colorsToggleHandler}
                  size="sm"
               />
         </div>}
         <div className={styles.TableContainer + " ml-3"} >
               <Table
               classes={tableStyle}
                  rows={tableRows}
               />
         </div>
      </div>
   );
}

export default PrimeNumbers;