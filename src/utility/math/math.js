import React from 'react';

export const fillMatrixNormal = (matrixSize, tableRowData) => {
    const rows = [];
    let cellColors = [];
    for(let i = 1; i <= matrixSize; i++) {
        for(let j = ((i-1)*matrixSize)+1; j <= matrixSize*i; j++){
           tableRowData.push(j);
           cellColors.push('defaultCell');
        }
        rows.push({text:tableRowData, colors: cellColors});
        tableRowData = [];
        cellColors = [];
      }
      return rows;
}

export const fillMatrixSpiral = matrixSize => {
    const results = [];
  for (let i = 0; i < matrixSize; i++) {
      results.push([]);
    }
  let counter = 1;
    let startColumn = 0;
    let endColumn = matrixSize - 1;
    let startRow = 0;
    let endRow = matrixSize - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
      // Top row
      for (let i = startColumn; i <= endColumn; i++) {
        results[startRow][i] = counter;
        counter++;
      }
      startRow++;
  // Right column
      for (let i = startRow; i <= endRow; i++) {
        results[i][endColumn] = counter;
        counter++;
      }
      endColumn--;
  // Bottom row
      for (let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = counter;
        counter++;
      }
      endRow--;
  // start column
      for (let i = endRow; i >= startRow; i--) {
        results[i][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }

    const resultsObj = results.map(array => {
      let colorsArr = [];
      // eslint-disable-next-line no-unused-vars
      for(let el in array) {
        colorsArr.push('defaultCell');
      }
      return {text: array,colors: colorsArr};
    })
  return resultsObj;
  }

  export const isPrimeNumber = number => {
      if(number === 1) {
        return false;
      }
      if(number === 2 ) {
        return true;
      }

      for(let i = 2; i <= (number / 2); i++) {
        if(number % i === 0) {
          return false;
        }
      }
      
      return true;
  }

  export const isEvenNumber = number => {
    if(number === 1) {
      return false;
    }
    if(number === 2 ) {
      return true;
    }
      if(number % 2 === 0) {
        return true;
      }
    
    return false;
}

export const findEvenNumbersPrimeTotals = numberQty => {
  const evensArr = [2];
  const firstPrime = [1];
  const secPrime = [1];
  for(let i = 3;i <= numberQty; i++) {
    if(isEvenNumber(i)) {
        for(let j = 2; j <= i/2; j++) {
          if(isPrimeNumber(j)) {
            if(isPrimeNumber(i-j)){        
              evensArr.push(i);
              firstPrime.push(j);
              secPrime.push(i-j);             
            }
          }
        }
    }   
  }
  const counts = {};
  evensArr.forEach((x) => { counts[x] = (counts[x] || 0)+1; });

  const result = {};
 for(let i=0; i < evensArr.length; i++){
    result[counts[evensArr[i]]] = [];
 }

 for(let i=0; i < evensArr.length; i++){
  result[counts[evensArr[i]]].push(<p><b>{evensArr[i]}</b>={firstPrime[i]}+{secPrime[i]}</p>);
}

return result;

}
