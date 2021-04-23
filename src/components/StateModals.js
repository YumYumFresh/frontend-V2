import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../css/modal.css";
import '../css/stateModal.css'
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

const StateModals = (props) => {
  const [stateSelect, setStateSelect] = useState("");
  const stateIdsIndexes = Object.values(props.stateIds);
  const stateIdsNames = Object.keys(props.stateIds);
  let reverseStateIds = {};
  for (let i = 0; i < stateIdsIndexes.length; i++) {
    reverseStateIds[stateIdsIndexes[i]] = stateIdsNames[i];
  }

  function handleStateSelect(selection) {
    sessionStorage.setItem("usersState", selection);
    setStateSelect(selection);
    console.log(selection);
    console.log(
      `The axios get should be:  http://localhost:3000/states/${selection}/produces?month=${sessionStorage.getItem(
        "userMonth"
      )}`
    );
    props.setStatessModalShow(false)
  }

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
              State Select
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <h4 className='stateModal__h4'>Pick the State you'd like to check out produce for:</h4>
            
              <Container>
              <Row>
            {stateIdsIndexes.map((stateId) => (
                <Col xs={3} lg={3}>
              <div className="stateModal__mapDiv"
                key={stateId}
                onClick={() => handleStateSelect(reverseStateIds[stateId])}
              >
                {reverseStateIds[stateId]} 
              </div>
                </Col>
            ))}
            </Row>
            </Container>
          
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
        onClick={() => props.setStatessModalShow(true)}
      >
        More info
      </Button>

      <MyVerticallyCenteredModal
        show={props.statessModalShow}
        onHide={() => props.setStatessModalShow(false)}
      />
    </>
  );
};

export default StateModals;
