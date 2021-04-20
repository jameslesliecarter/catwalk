import React from "react";
import Navbar from './Navbar/Navbar.jsx'
import Overview from "./Overview/Overview.jsx";
import Related from "./Related/Related.jsx";
import QandA from "./QandA/QandA.jsx";
import Reviews from "./Reviews/Reviews.jsx";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('http://localhost:9000/products/19093')
    .then(res => console.log(res))
    .catch(err => console.log(err));
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
