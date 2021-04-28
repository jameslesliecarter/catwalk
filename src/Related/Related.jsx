import React from "react";
import axios from 'axios';
import Slider from '../Widgets/Slider.jsx';
import Card from '../Widgets/Card.jsx';
import {Outfits} from './Outfits.jsx';
import {FaRegStar} from 'react-icons/fa';
import Comparison from './Comparison.jsx';
import Modal from 'react-modal';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isOpen: false,
      comparedProduct: {}
    }

    this.getRelatedProducts = this.getRelatedProducts.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  getRelatedProducts(id) {
    axios.get(`/api/products/${id}/related`)
    .then(response => response.data)
    .then(data => {
      data.forEach(id => {
        axios
        .get(`/api/products/${id}`)
        .then(response => response.data)
        .then(details => {
          axios.get(`/api/products/${id}/styles`)
          .then(response => response.data)
          .then(styles => {
            details.styles = styles.results[0].photos;
            this.setState(prevState => ({
              products: prevState.products.concat([{
                details: details,
                images: styles.results[0].photos
              }])
            }))
          })
        })
      })
    })
  }

  componentDidMount() {
    this.getRelatedProducts(this.props.product.id);
    Modal.setAppElement('#app');
  }

  closeModal() {
    this.setState({
      isOpen: false
    });
  }

  openModal(index, event) {
    event.stopPropagation();
    this.setState({
      isOpen: true,
      comparedProduct: this.state.products[index]
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.product !== prevProps.product) {
      this.setState({products: []});
      this.getRelatedProducts(this.props.product.id);
    }
  }

  render() {
    return (
      <div>
        <div className="related">
          <h2 className="related-text">RELATED PRODUCTS</h2>
          <div className="related-list carousel-list carousel-horizontal">
            <Slider direction={'horizontal'}>
            {this.state.products.map((product,index) =>
              <Card details={product.details} images={product.images} key={index} index={index} cardClick={this.props.cardClick} btnClick={this.openModal} glyph={<FaRegStar />}/>
            )}
            </Slider>
          </div>
        </div>
        <Outfits product={this.props.product} styles={this.props.styles} cardClick={this.props.cardClick} />
        <Modal isOpen={this.state.isOpen} onRequestClose={this.closeModal}>
          <Comparison currentProduct={this.props.product} comparedProduct={this.state.comparedProduct.details} />
        </Modal>
      </div>
    );
  }
}

export default Related;