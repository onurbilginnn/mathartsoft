import React from 'react';

import TableCell from './TableCell/TableCell';

import './table.css';

const Table = props => {

    let colHeaders;

     if (props.headers) {
         colHeaders = props.headers.map((header, i) => <TableCell
             key={i + 'tableColHeader'}
             scope="col"
             header>{header}</TableCell>);
     }


    const tableRows = props.rows.map((row, i) => {
        const rowTextArr = [];
        for (let txt in row.text) {
            rowTextArr.push(<TableCell
                key={i.toString()+ txt.toString() + 'tableCellKey'}
                colspan={row.colspan}>{row.text[txt]}</TableCell>)
        };
        return (<tr key={i + 'trKey'}>
            {row.headerText && <TableCell
                scope="row"
                header>{row.headerText}</TableCell>}
            {rowTextArr}
        </tr>)
    });

    console.log(props.classes);

    return (
        <div>
            <table className={props.classes}>
                {colHeaders && <thead>
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