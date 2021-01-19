import React, { useState } from 'react';
import OnOffBtn from '../../UI/OnOffBtn/OnOffBtn';

import MasNoColorSVG from '../MasNoColorSVG';
import MasSVG from '../MasSVG';

import styles from './PianoSVG.module.css';

export const PianoSVG = () => {
    const [isPianoModeOn, setIsPianoModeOn] = useState(false);

    const pianoModeOnHandler = (checked) => {
      setIsPianoModeOn(checked);
    }

 return (<div className={styles.PianoSVGContainer}>
    <OnOffBtn 
        label = "Piano Mode:"
        isOn = {isPianoModeOn}
        onChanged = {pianoModeOnHandler}
    />
 <div className={styles.SVGContainer}>
    {isPianoModeOn ?  <MasNoColorSVG /> : <MasSVG />}
 </div>
 </div>)
};

export default PianoSVG;