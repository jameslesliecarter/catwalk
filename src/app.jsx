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
      related: [],
      reviewAvg: 0
    }
    this.cardClick = this.cardClick.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  async getProduct(id = '19093') {
    const [firstRes, secondRes, thirdRes] = await Promise.all([
      axios.get(`/api/products/${id}`),
      axios.get(`/api/products/${id}/styles`),
      axios.get(`/api/products/${id}/related`)
    ]);

    this.setState({
      product: firstRes.data,
      styles: secondRes.data,
      related: thirdRes.data,
      reviewAvg: fourthRes.data
    });
  }

  componentDidMount() {
    this.getProduct();
  }

  cardClick(id) {
    id = id.toString();
    this.getProduct(id);
  }

  render() {
    console.log(this.state.reviewAvg);
    return (
    <>
      <Navbar />
      <Overview styles={this.state.styles.results} product={this.state.product}/>
      <Related related={this.state.related} product={this.state.product} styles={this.state.styles} cardClick={this.cardClick} />
      <QandA product={this.state.product}/>
      <Reviews product_id={this.state.product.id} />
    </>
    );
  }
}

export default App;