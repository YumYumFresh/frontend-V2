import NavBar from "./components/navBar";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Switch, Route} from "react-router-dom";
import Tab from "./components/tab"

import Header from "./components/header"
import Footer from "./components/footer"

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
            lg={12}
            style={{
              border: "5px solid red",
              padding: "5%",
            }}
            >
            {" "}
            <Header/>
              <Tab/>
          
          </Col>
        </Row>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
