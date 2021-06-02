import React from 'react';

import { Modal, Button } from 'react-bootstrap';

import styles from './BigCenteredModal.module.css';

const BigCenteredModal = props => {
    return (
        <Modal
        {...props}       
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Body  id="example-custom-modal-styling-title">
            {props.title}
          </Modal.Body>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.BodyContainer} >
          {props.body}
          </div>
          <div>{props.dropzone}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default BigCenteredModal;