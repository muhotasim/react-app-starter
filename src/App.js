import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
    [].forEach((fn) => (this[fn] = this[fn].bind(this)));
  }

  render() {
    return <div></div>;
  }
}

export default App;
