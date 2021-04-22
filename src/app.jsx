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
    this.state = {
      product: {},
      styles: {},
      related: []
    }
  }

  async componentDidMount() {
    const [firstRes, secondRes, thirdRes] = await Promise.all([
      axios.get('http://localhost:9000/products/19093'),
      axios.get('http://localhost:9000/products/19093/styles'),
      axios.get('http://localhost:9000/products/19093/related')
    ]);

    this.setState({
      product: firstRes.data,
      styles: secondRes.data,
      related: thirdRes.data
    });
  }

  render() {
    console.log(this.state.product)
    return (
    <>
      <Navbar />
      <Overview styles={this.state.styles.results} product={this.state.product}/>
      <Related related={this.state.related} />
      <QandA />
      <Reviews />
    </>
    );
  }
}

export default App;
