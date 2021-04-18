import React from "react";
import Overview from "./Overview/Overview.jsx";
import QandA from "./QandA/QandA.jsx";
import Related from "./Related/Related.jsx";
<<<<<<< HEAD
import Reviews from "./Reviews/ReviewsRatings.jsx";
import ax from 'axios';
=======
import Reviews from "./Reviews/Reviews.jsx";
>>>>>>> bc3c7b590a6e022ec3d454a5a2e2168096b5fe02

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
