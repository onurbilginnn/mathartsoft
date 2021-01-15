import React from 'react';

import { Button } from 'react-bootstrap';
import SnailSVG from '../../components/SVGs/SnailSVG';
import InfoTextsContainer from './InfoTextsContainer/InfoTextsContainer';

import styles from './Home.module.css';

const Home = props => {

    const goToPlugins = page => {
        props.history.push('/' + page);
    }

    return (
        <div className={styles.HomeContainer} >
            <div className={styles.WelcomeContainer}>
                <div className={styles.TextContainer} >
                    <p className={styles.WelcomeText}>Matematik ve sanatın yazılımla içiçe geçen dansı</p>
                    <h1 className={styles.TitleText}>MathArtSoft</h1>
                </div>
                <div className={styles.BtnContainer}>
                    <Button onClick={() => goToPlugins('services')} className={styles.ServicesBtn}>Servisler</Button>
                    <Button onClick={() => goToPlugins('plugins')} className={styles.PluginsBtn}>Eklentiler -{'>'}</Button>
                </div>
            </div>
            <InfoTextsContainer />
            <div className={styles.FeaturesContainer}>
                <div className={styles.SnailSVGContainer} >
                    <SnailSVG />
                </div>
  	        <p style={{marginLeft: "-150px"}} className="hoverMeText no-display-1280">Please hover over the snail at left to see our features.</p>

            </div>
        </div>
    );
}

export default Home;