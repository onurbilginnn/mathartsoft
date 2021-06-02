import React from 'react';

import { Modal, Button } from 'react-bootstrap';

const AlertModal = props => { 
    return (
      <>  
        <Modal show={props.show} size="sm">
          <Modal.Header className="bg-danger">
            <Modal.Title className="text-light" >{props.alertTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.alertBody}</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={props.onCloseAlertModal}>
              Close
            </Button>           
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default AlertModal;