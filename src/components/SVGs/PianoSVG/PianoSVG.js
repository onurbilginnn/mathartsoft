import React, { useState } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

import MasNoColorSVG from '../MasNoColorSVG';
import MasSVG from '../MasSVG';

import styles from './PianoSVG.module.css';

export const PianoSVG = () => {
    const [isPianoModeOn, setIsPianoModeOn] = useState(false);

 return (<div className={styles.PianoSVGContainer}>
 <div className={styles.OnOffBtnContainer}>
 <div className="mr-2">Piano Mode:</div>
    <BootstrapSwitchButton 
    checked={isPianoModeOn}
    onlabel="On"
    offlabel="Off"
    onstyle="success"
    offstyle="danger"
    onChange={(checked) => {
        setIsPianoModeOn(checked)
    }}
/>
 </div>
 <div className={styles.SVGContainer}>
    {isPianoModeOn ?  <MasNoColorSVG /> : <MasSVG />}
 </div>
 </div>)
};

export default PianoSVG;