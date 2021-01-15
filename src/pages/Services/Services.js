import React from 'react';

import HumanMindSVG from '../../components/SVGs/HumanMindSVG';

import styles from './Services.module.css';

const Services = props => {

    return (
        <div className={styles.ServicesPageContainer} >
            <HumanMindSVG />
        </div>
    );
};

export default Services;