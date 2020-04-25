import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
    [].forEach((fn) => (this[fn] = this[fn].bind(this)));
  }

  render() {
    return (
      <div>
        <h1>Hello world d</h1>
        <input
          onChange={(e) => {
            this.setState({ title: e.target.value });
          }}
          value={this.state.title}
        />
      </div>
    );
  }
}

export default App;
