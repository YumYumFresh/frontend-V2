import NavBar from "./components/navBar";
import AppTab from "./components/AppTab";
import Footer from "./components/footer";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="app__content">
        <AppTab />
      </div>
      <Footer />
    </div>
  );
}

export default App;
