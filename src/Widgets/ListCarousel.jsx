import React from 'react';
import Card from '../Related/components/Card.jsx';
import Arrow from './Arrow.jsx';

class ListCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="carousel carousel-list">
        {this.props.related.map((product, index) => {
          return (
            <Card key={index} details={product} />
          )
        })}
      </section>
    )
  }
}

export default ListCarousel;