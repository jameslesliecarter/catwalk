import React from "react";
import Navbar from './Navbar/Navbar.jsx'
import Overview from "./Overview/Overview.jsx";
import RelatedOutfits from "./Related/RelatedOutfits.jsx";
import QandA from "./QandA/QandA.jsx";
import Reviews from "./Reviews/Reviews.jsx";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      styles: [],
    }
    this.cardClick = this.cardClick.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  async getProduct(id = '19093') {
    const [firstRes, secondRes, thirdRes] = await Promise.all([
      axios.get(`/api/products/${id}`),
      axios.get(`/api/products/${id}/styles`)
    ]);

    this.setState({
      product: firstRes.data,
      styles: secondRes.data
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
    if (Object.keys(this.state.product).length === 0 || this.state.styles.length === 0) {
      return (<></>);
    } else {
      return (
        <>
          <Navbar />
          <Overview styles={this.state.styles.results} product={this.state.product}/>
          <RelatedOutfits product={this.state.product} styles={this.state.styles} cardClick={this.cardClick} />
          <QandA product={this.state.product}/>
          <Reviews product_id={this.state.product.id} />
        </>
        );
    }
  }
}

export default App;