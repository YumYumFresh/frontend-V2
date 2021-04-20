import NavBar from "./components/navBar";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Switch, Route, Link } from "react-router-dom";
import Tab from "./components/tab"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact render="" />
        <Route path="/season" render="" />
        <Route path="/state" render="" />
      </Switch>
      <div>
        <Row style={{ margin: "2%" }}>
          <Col
            xs={6}
            lg={6}
            style={{
              border: "5px solid red",
              padding: "20%",
            }}
            >
            {" "}
            <p
            className="animate__animated animate__flipInY"
            >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            aspernatur et alias sed nisi aliquam iusto distinctio dolores enim
            inventore mollitia cupiditate? Nulla ipsam, quod nihil ea soluta
            consectetur beatae!
            </p>
          </Col>
          <Col
            xs={6}
            lg={6}
            style={{
              border: "5px solid red",
              padding: "1%",
            }}
          >
            <Tab/>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
