import React from 'react';
import { Container, Row } from 'react-bootstrap';

import HumanMindSVG from '../../components/SVGs/HumanMindSVG';

const Art = () => {
 
    return (
        <Container>
        <Row className="mb-4 justify-content-md-center">
            <HumanMindSVG />
        </Row>
        </Container>
    );
}

export default Art;