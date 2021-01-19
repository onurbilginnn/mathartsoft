import React from 'react';

import './tableCell.css';

const TableCell = props => {
    return  props.header ? <th className={props.cellClass} scope={props.scope}>{props.children}</th>:
    <td className={props.cellClass} colSpan={props.colspan}>{props.children}</td>;
}

export default TableCell;