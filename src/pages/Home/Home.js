import React from 'react';

import { Button } from 'react-bootstrap';

import PianoSVG from '../../components/SVGs/PianoSVG/PianoSVG';

import styles from './Home.module.css';

const Home = props => {
    const goTo = page => {
        props.history.push('/' + page);
    }
    return (
        <div className={styles.HomeContainer} >
            <div className={styles.WelcomeContainer}>
                <div className={styles.TextContainer} >
                    <p className={styles.WelcomeText}>The Dance of Mathematics and Art Intertwined with Software</p>
                    <h1 className={styles.TitleText}>MathArtSoft</h1>
                </div>
                <div className={styles.BtnContainer}>
                    <Button onClick={() => goTo('math')} className={styles.Btn}>Math</Button>
                    <Button onClick={() => goTo('art')} className={styles.Btn}>Art</Button>
                </div>
            </div>
            <div className={styles.FeaturesContainer}>
                <div className={styles.SnailSVGContainer} >
                <PianoSVG />
                </div>

            </div>
        </div>
    );
}

export default Home;