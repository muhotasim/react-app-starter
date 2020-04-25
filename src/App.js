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
        <label>Test d a</label>
        <input
          onChange={(e) => {
            this.setState({ title: e.target.value });
          }}
          value={this.state.title}
        />
        <h1>Hello world dasdadasd </h1>
      </div>
    );
  }
}

export default App;
