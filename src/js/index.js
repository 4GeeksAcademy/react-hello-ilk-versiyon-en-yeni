//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./component/navbar";
import Jumbotron from "./component/Jumbotron";
import Card from "./component/Card";
import Footer from "./component/Footer";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import CardContainer from "./component/Card";
const App = () => {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <CardContainer />
        <Footer />
      </div>
    );
  };
//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));

