import React from 'react';

import { Button,ButtonGroup,Card } from 'react-bootstrap';

import PianoSVG from '../../components/SVGs/PianoSVG/PianoSVG';

import styles from './Home.module.css';

const Home = props => {
    const goTo = page => {
        props.history.push('/' + page);
    }
    return (
        <Card >
            <Card.Body className={styles.WelcomeContainer}>
        <h1 className="invisible">A</h1>
        <h1 className="invisible">A</h1>
                    <Card.Text className={styles.WelcomeText}>The Dance of Mathematics and Art Intertwined with Software</Card.Text>
                    <h1 className={styles.TitleText}>MathArtSoft</h1>  
                    <ButtonGroup>
                    <Button onClick={() => goTo('math')} className={styles.Btn + " mr-2"}>Math</Button>
                    <Button onClick={() => goTo('art')}  className={styles.Btn + " ml-2"}>Art</Button>           
                    </ButtonGroup>
            </Card.Body>
            <Card.Body className={styles.FeaturesContainer}>
                <PianoSVG />
            </Card.Body>
        </Card>
    );
}

export default Home;