import logo from "./logo.svg";
import "./App.css";
import Header from "./components/UI/Header";
import NabTab from "./components/UI/NabTab";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NabTab></NabTab>
      <header className="App-header"></header>
      <Footer></Footer>
    </div>
  );
}

export default App;
