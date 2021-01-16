import React from 'react';

import TableCell from './TableCell/TableCell';

import styles from './Table.module.css';

const Table = props => {

    const colHeaders = props.headers.map(header => <TableCell
        keyprop={header + 'tableCellHeader'}
        scope="col"
        header>{header}</TableCell>);
    const tableRows = props.rows.map((row, i) => {
        const rowTextArr = [];
        for (let txt in row.text) {
            rowTextArr.push(<TableCell
                keyprop={row.text[txt] + 'tableCellKEy'}
                colspan={row.colspan}>{row.text[txt]}</TableCell>)
        }
        return (<tr key={row.headerText + 'trKey'}>
            {row.headerText && <TableCell
                scope="row"
                header>{row.headerText}</TableCell>}
            {rowTextArr}
        </tr>)
    });


    return (
        <div className={styles.TableContainer} >
            <table className="table table-bordered">
                {colHeaders.length > 0 && <thead>
                    <tr>
                        {colHeaders}
                    </tr>
                </thead>}
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    );
}

export default Table;