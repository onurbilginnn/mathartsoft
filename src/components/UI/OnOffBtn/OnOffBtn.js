import React from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

import styles from './OnOffBtn.module.css';

const OnOffBtn = props => {

 return (
 <div className={styles.OnOffBtnContainer}>
 <div className="mr-2">{props.label}</div>
    <BootstrapSwitchButton 
    checked={props.isOn}
    onlabel="On"
    offlabel="Off"
    onstyle="success"
    offstyle="danger"
    onChange={props.onChanged}
    size={props.size}
/>
 </div>
 )
};

export default OnOffBtn;