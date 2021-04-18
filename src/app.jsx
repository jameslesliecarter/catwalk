import React from "react";
import Overview from "./Overview/Overview.jsx";
import QandA from "./QandA/QandA.jsx";
import Related from "./Related/Related.jsx";
import Reviews from "./Reviews/ReviewsRatings.jsx";
import ax from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <div>
      <Overview />
      </div>
      <div>
        <QandA />
      </div>
      <div>
        <Related />
      </div>
      <div>
        <Reviews />
      </div>
    </div>
    );
  }
}

export default App;
