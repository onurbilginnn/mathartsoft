import React from 'react';


const TableCell = props => {
    return  props.header ? <th style={{backgroundColor: props.cellColor}} scope={props.scope}>{props.children}</th>:
    <td style={{backgroundColor: props.cellColor}} colSpan={props.colspan}>{props.children}</td>;
}

export default TableCell;