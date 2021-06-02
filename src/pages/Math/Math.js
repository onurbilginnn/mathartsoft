import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Math.module.css';

const Math = props => {

    return (
        <div className={styles.MathContainer} >
            <div className={styles.OperationContainer}>
                <div className={styles.SumContainer}>+</div>
                <div className={styles.MinusContainer}>−</div>
                <div className={styles.MultiplyContainer}>x</div>
                <div className={styles.DivideContainer}>÷</div>
            </div>
            <ul className="list-group">
            <NavLink  className={styles.Link} to="/math/prime">
                <li className="list-group-item">Prime Numbers</li>
                </NavLink>
            </ul>
        </div>

    );
}

export default Math;