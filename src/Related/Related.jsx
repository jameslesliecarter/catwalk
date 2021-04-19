import React from "react";
import CardsList from './components/CardsList.jsx'

class Related extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CardsList />
      </div>
    );
  }
}

export default Related;