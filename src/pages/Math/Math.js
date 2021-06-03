import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import styles from './Math.module.css';

const Math = props => {

    return (
        <Col >
        <h1 className="invisible">A</h1>
        <Row className="justify-content-md-center" >
            <Row className={styles.OperationContainer + " w-100 justify-content-around"} >
                <h1 className={styles.SumContainer}>+</h1>
                <h1 className={styles.MinusContainer}>−</h1>
                <h1 className={styles.MultiplyContainer}>x</h1>
                <h1 className={styles.DivideContainer}>÷</h1>
            </Row>
        </Row>
            <Card className="w-25">
            <Card.Header  >
            <NavLink  className={styles.Link} to="/math/prime">Prime Numbers</NavLink>
            </Card.Header>
            </Card>
            <h1 className="invisible">A</h1>
            <h1 className="invisible">A</h1>
            <h1 className="invisible">A</h1>
            <h1 className="invisible">A</h1>
        </Col>

    );
}

export default Math;