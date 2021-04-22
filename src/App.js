import NavBar from "./components/navBar";
import Tab from "./components/tab";
import Header from "./components/header";
import Footer from "./components/footer";
import Geolocation from "./components/Geolocation"
import "./css/App.css"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Geolocation/>
        <Header />
      <div className="app__content">
        <Tab />
      </div>
      <Footer />
    </div>
  );
}

export default App;
