import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../css/modal.css";

const MonthsModals = (props) => {
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Produce Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Pick a month:</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <Button
        className="modal__button"
        onClick={() => props.setMonthsModalShow(true)}
      >
        More info
      </Button>

      <MyVerticallyCenteredModal
        show={props.monthsModalShow}
        onHide={() => props.setMonthsModalShow(false)}
      />
    </>
  );
};

export default MonthsModals;
