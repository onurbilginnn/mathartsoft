import React from 'react';

import underConstructionSVG from '../../assets/SVGs/under_construction.svg';

import styles from './UnderConstruction.module.css';

const UnderConstruction = props => {
 
    return (
        <div className={styles.ConstructionContainer} >
        <img className={styles.SVGContainer} src={underConstructionSVG} alt="Under Construction" />
        </div>
    );
}

export default UnderConstruction;