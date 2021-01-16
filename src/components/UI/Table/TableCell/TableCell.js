import React from 'react';


import styles from './TableCell.module.css';

const TableCell = props => {

    return  props.header ? <th key={props.keyprop} scope={props.scope}>{props.children}</th>:
    <td key={props.keyprop} colSpan={props.colspan}>{props.children}</td>;
}

export default TableCell;