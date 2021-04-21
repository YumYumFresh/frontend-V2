import NavBar from "./components/navBar";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Switch, Route } from "react-router-dom";
import Tab from "./components/tab";
import "./css/App.css"
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render="" />
        <Route path="/season" render="" />
        <Route path="/state" render="" />
      </Switch>
      <NavBar />
      <div className="app__content">
        <Header />
        <Tab />
      </div>
      <Footer />
    </div>
  );
}

export default App;
