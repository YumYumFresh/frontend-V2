import NavBar from "./components/navBar";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import{
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Row style={{margin:"2%"}}>
          <Col
            xs={6}
            lg={6}
            style={{
              border: "5px solid red", padding:"20%"
            }}
          >
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            aspernatur et alias sed nisi aliquam iusto distinctio dolores enim
            inventore mollitia cupiditate? Nulla ipsam, quod nihil ea soluta
            consectetur beatae!{" "}
          </Col>
          <Col
            xs={6}
            lg={6}
            style={{
              border: "5px solid red", padding:"20%"
            }}
          >
            second
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
