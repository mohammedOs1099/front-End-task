import { useState } from "react";
import {  Button, Modal  } from "react-bootstrap";

const AlertComp = ({
  showConfirm,
  handleCloseConfirm,
  
  handleConfirmDelete
}) => {


  return (
    <Modal show={showConfirm} onHide={handleCloseConfirm} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this employee?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseConfirm}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirmDelete}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertComp;
