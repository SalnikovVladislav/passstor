import React from "react";
import Header from "./Components/Header";
import "./styles/App.css";
import LoginForm from "./Components/LoginForm";
import PassList from "./Components/PassList";
import AddForm from "./Components/AddForm";
import About from "./Components/About";
import Phrase from "./Components/Phrase";


function App() {
  return (
  <div className="App">
    <Header />
    <About/>
    <LoginForm/>
    <PassList/>
    <AddForm/>
    <Phrase/>
  </div>
  );
}

export default App;
