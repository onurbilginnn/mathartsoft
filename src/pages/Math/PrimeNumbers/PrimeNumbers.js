import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

import Modal from '../../../components/UI/Modal/BigCenteredModal';
import AlertModal from '../../../components/UI/Modal/AlertModal';
import OnOffBtn from '../../../components/UI/OnOffBtn/OnOffBtn';
import Table from '../../../components/UI/Table/Table';
import { fillMatrixNormal,
    fillMatrixSpiral,
     isPrimeNumber,
     isEvenNumber,
   findEvenNumbersPrimeTotals
    } from '../../../utility/math/math';

import styles from './PrimeNumbers.module.css';

const PrimeNumbers = props => {
   const maxMatrixSize = 50;
   const [matrixSize, setMatrixSize] = useState('');
   const [tableRows, setTableRows] = useState([]);
   const [tableStyle, setTableStyle] = useState('table table-bordered');
   const [onOffBtns, setOnOffBtns] = useState({spiral: false,
       bordered: true,
        colorBtns: {
         primes: false,
         evens: false,
         odds: false
   }});
   const [showModal, setShowModal] = useState(false);
   const [showAlertModal, setShowAlertModal] = useState(false);
   const [evenPrimeTotals, setEvenPrimeTotals] = useState();

   const resetAllBtns = () => {
      setOnOffBtns({spiral: false,
         bordered: true,
          colorBtns: {
           primes: false,
           evens: false,
           odds: false
     }});
   }

   const matrixSizeHandler = event => {
      if(event.target.value <= maxMatrixSize) {
         setMatrixSize(event.target.value);
      } else {
         setShowAlertModal(true);
      }
   };

   let rows = [];
   let tableRowData = [];

   const createMatrixHandler = () => {
      resetAllBtns();
         rows = fillMatrixNormal(matrixSize, tableRowData, []);
      setTableRows(rows);

      const primeTotalsObj = findEvenNumbersPrimeTotals(matrixSize * matrixSize);

      const primeTotalsJSX = [];
      for(let el in primeTotalsObj) {
         const arr = [];
         for(let div in primeTotalsObj[el]) {
            arr.push(primeTotalsObj[el][div]);
         }  
         primeTotalsJSX.push(<div className="m-4">
               <label>{el} diff prime totals</label>
               <div className="mr-3">{arr}</div>
            </div>)
      }
      setEvenPrimeTotals(primeTotalsJSX);

   }

   const spiralToggleHandler = checked => {
      setOnOffBtns(prevState => ({
         ...prevState,
         spiral: checked,
         colorBtns: {
            primes: false,
            evens: false,
            odds: false
         }
      }));
      if(!checked) {
         rows = fillMatrixNormal(matrixSize, tableRowData);
      } else {
         rows = fillMatrixSpiral(matrixSize);

      }
      setTableRows(rows);
   }

   const borderToggleHandler = checked => {
      setOnOffBtns(prevState => ({
         ...prevState,
         bordered: checked
      }));
      if(!checked) {
         setTableStyle('table borderless')
      } else {
         setTableStyle('table table-bordered');
      }
   }

   const showPrimesHandler = checked => {
      setOnOffBtns(prevState => ({
         ...prevState,
         colorBtns:{
            ...prevState.colorBtns,
            primes: checked
         }
      }));
      let currentRows = [];
      if(checked) {
        currentRows = tableRows.map(el => {
           for(let txt in el.text) {
             if (el.text[txt] === 2){
               el.colors[txt] = ' numberTwo';
              } else if(isPrimeNumber(el.text[txt])) {
                 el.colors[txt] = ' primeNumberCell';
              } 
           }
           return el;
        })
      } else {
         currentRows = tableRows.map(el => {
            for(let txt in el.text) {             
               if (el.text[txt] === 2){
                  el.colors[txt] = ' defaultCell';
                 } else if(isPrimeNumber(el.text[txt])) {
                    el.colors[txt] = ' defaultCell';
                 }            
            }
            return el;
         })
      }
      setTableRows(currentRows);
   }

   const showEvensHandler = checked => {
      setOnOffBtns(prevState => ({
         ...prevState,
         colorBtns:{
            ...prevState.colorBtns,
            evens: checked
         }
      }));
      let currentRows = [];
      if(checked) {
        currentRows = tableRows.map(el => {
           for(let txt in el.text) {
             if (el.text[txt] === 2){
               el.colors[txt] = ' numberTwo';
              } else if(isEvenNumber(el.text[txt])) {
                 el.colors[txt] = ' evenNumberCell';
              } 
           }
           return el;
        })
      } else {
         currentRows = tableRows.map(el => {
            for(let txt in el.text) {
               if (el.text[txt] === 2){
                 el.colors[txt] = ' defaultCell';
                } else if(isEvenNumber(el.text[txt])) {
                   el.colors[txt] = ' defaultCell';
                } 
             }
             return el;
          })
      }
      setTableRows(currentRows);
   }

   const clearMatrixHandler = () => {
      setTableRows([]);
      setMatrixSize('');
   }

  

   return (
      <div className={styles.PrimeNumbersContainer + " " + { ...props.classes }} >
         <Modal
          show={showModal}
           onHide={() => {setShowModal(false)}}
              body={evenPrimeTotals}
              dialogClassName="modal-90w"
           />
           <AlertModal
           alertTitle="Matrix Size Alert"
           alertBody={"Max matrix size could be " + maxMatrixSize}
            onCloseAlertModal={() => setShowAlertModal(false)}
             show={showAlertModal} />
         <InputGroup className="mb-3 col-md-3">

            <FormControl
               placeholder="Matrix Size"
               aria-label="Matrix Size"
               aria-describedby="basic-addon2"
               onChange={matrixSizeHandler}
               value={matrixSize}
            />
            <InputGroup.Append>
               <Button onClick={createMatrixHandler} disabled={!matrixSize || matrixSize <= 0} >Calculate</Button>
               <Button className="ml-3" onClick={clearMatrixHandler} variant="danger" disabled={tableRows.length === 0} >Clear</Button>
            </InputGroup.Append>
         </InputGroup>
         <div className={tableRows.length > 0 ? styles.TableBtnsContainer: styles.TableBtnsContainer + " " + styles.Hidden + " m-3" }>
         <Button onClick={() => {setShowModal(true)}} size="xs" variant="outline-dark" >Show Totals</Button>
               <OnOffBtn
                  isOn={onOffBtns.spiral}
                  label="Spiral Numbers:"
                  onChanged={spiralToggleHandler}
                  size="sm"
               />
                  <OnOffBtn
                  isOn={onOffBtns.bordered}
                  label="Bordered Table:"
                  onChanged={borderToggleHandler}
                  size="sm"
               />    
               <div className={styles.ColorBtnsContainer} >
               <OnOffBtn
                  isOn={onOffBtns.colorBtns.primes}
                  label="Show Primes:"
                  onChanged={showPrimesHandler}
                  size="xs"
               />
                <OnOffBtn
                  isOn={onOffBtns.colorBtns.evens}
                  label="Show Evens:"
                  onChanged={showEvensHandler}
                  size="xs"
               />             
               </div>              
         </div>

         <div className={tableRows.length > 1 ?styles.TableContainer: styles.TableContainer+ " " + styles.Hidden+ " ml-3"} >
               <Table
               classes={tableStyle}
                  rows={tableRows}
               />

         </div>

      </div>
   );
}

export default PrimeNumbers;