import React from "react";
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
    <div>
      <div>
        <Overview />
      </div>
      <div>
        <Related />
      </div>
      <div>
        <QandA />
      </div>
      <div>
        <Reviews />
      </div>
    </div>
    );
  }
}

export default App;
