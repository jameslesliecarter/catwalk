import React from "react";
import Navbar from './Navbar/Navbar.jsx'
import Overview from "./Overview/Overview.jsx";
import Related from "./Related/Related.jsx";
import QandA from "./QandA/QandA.jsx";
import Reviews from "./Reviews/Reviews.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <>
      <Navbar />
      <Overview />
      <Related />
      <QandA />
      <Reviews />
    </>
    );
  }
}

export default App;
