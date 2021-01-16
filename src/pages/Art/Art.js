import React from 'react';

import HumanMindSVG from '../../components/SVGs/HumanMindSVG';

import styles from './Art.module.css';

const Art = props => {
 
    return (
        <div className={styles.ArtContainer} >
            <HumanMindSVG />
        </div>
    );
}

export default Art;