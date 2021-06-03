import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import OnOffBtn from '../../UI/OnOffBtn/OnOffBtn';

import MasNoColorSVG from '../MasNoColorSVG';
import MasSVG from '../MasSVG';

export const PianoSVG = () => {
    const [isPianoModeOn, setIsPianoModeOn] = useState(false);

    const pianoModeOnHandler = (checked) => {
      setIsPianoModeOn(checked);
    }

 return (<Container >
 <Row className="justify-content-center">
    <OnOffBtn 
        label = "Piano Mode:"
        isOn = {isPianoModeOn}
        onChanged = {pianoModeOnHandler}
    />
 </Row>
 <Row className="mt-3 mb-3 justify-content-center border border-dark rounded">
    {isPianoModeOn ?  <MasNoColorSVG /> : <MasSVG />}
 </Row>
 </Container>)
};

export default PianoSVG;