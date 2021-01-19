export const fillMatrixNormal = (matrixSize, tableRowData) => {
    const rows = [];
    for(let i = 1; i <= matrixSize; i++) {
        for(let j = ((i-1)*matrixSize)+1; j <= matrixSize*i; j++){
           tableRowData.push(j);
        }
        rows.push({text:tableRowData});
        tableRowData = [];
      }
      return rows;
}

export const fillMatrixSpiral = (matrixSize) => {
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
        return {text: array};
    })

  return resultsObj;
  }