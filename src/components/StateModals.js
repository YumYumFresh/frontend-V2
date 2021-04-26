import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../css/modal.css";
import "../css/stateModal.css";
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

  function handleStateSelect(selection, stateId) {
    sessionStorage.setItem("usersState", selection);
    sessionStorage.setItem("userStateId", stateId);
    setStateSelect(selection);
    console.log(selection);
    console.log(
      `The axios get should be:  http://localhost:3000/states/${selection}/produces?month=${sessionStorage.getItem(
        "userMonth"
      )}`
    );
    props.setStatessModalShow(false);
    props.fire()
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            State Select
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <h4 className="stateModal__h4">
            Pick the State you'd like to check out produce for:
          </h4>

          <Container>
            <Row xs={5} lg={5}>
              {stateIdsIndexes.map((stateId) => (
                <Col
                className="stateModal__Col"
                // xs={{ span: 2 }}
                // lg={{ span: 2 }}
                >
                  <div
                    className="stateModal__mapDiv"
                    key={stateId}
                    onClick={() => handleStateSelect(reverseStateIds[stateId],stateId)}
                  >
                    {reverseStateIds[stateId]}
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
        <div style={{marginTop:"30px", marginRight:"100px"}}>
          <Button onClick={props.onHide} >Close</Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={props.statessModalShow}
        onHide={() => props.setStatessModalShow(false)}
      />
    </>
  );
};

export default StateModals;
