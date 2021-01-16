import React from 'react';

import Table from '../../../components/UI/Table/Table';

import styles from './PrimeNumbers.module.css';

const PrimeNumbers = props => {
 
    return (
        <div className={styles.PrimeNumbersContainer} >
            <Table
             headers={[1,2,3,4]}
                 rows={[{        
                    headerText:1,
                    text:['a','b','c']
                 },
                 {
                    headerText:2,
                    text:['a','b','c']
                 },
                 {
                    headerText:3,
                    text:['a','b','c']
                 },
                 {
                    headerText:4,
                    text:['a','b','c']
                 }]}
             />
        </div>
    );
}

export default PrimeNumbers;