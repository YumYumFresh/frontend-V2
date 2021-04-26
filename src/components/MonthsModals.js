import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../css/modal.css";
import "../css/monthModal.css";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";

// monthsModalShow = { monthsModalShow };
// setMonthsModalShow = { setMonthsModalShow };
// monthLookup = { monthLookup };

const MonthsModals = (props) => {
  const [monthSelect, setMonthSelect] = useState();

  const handleMonthSelect = (month) => {
    sessionStorage.setItem("month", month);
    sessionStorage.setItem("userMonth", props.monthLookup.indexOf(month));
    console.log(sessionStorage.getItem("month"));
    console.log(
      `The axios get should be:  http://localhost:3000/states/${sessionStorage.getItem(
        "usersState"
      )}/produces?month=${month}`
    );
    props.setMonthsModalShow(false);
    props.fire()
  };

  const monthLookup = props.monthLookup;

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
            Month Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="stateModal__h4">Pick a month:</h4>
          <Container>
            <Row>
              {monthLookup.map((month) => (
                <Col xs={3} lg={3}>
                  <div
                    className="monthModal__mapDiv"
                    key={month}
                    onClick={() => handleMonthSelect(month)}
                  >
                    {month}
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
      <MyVerticallyCenteredModal
        show={props.monthsModalShow}
        onHide={() => props.setMonthsModalShow(false)}
      />
    </>
  );
};

export default MonthsModals;
