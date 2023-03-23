// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import React, { ReactDOM } from "react";

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Write your code here
    return ReactDOM.createPortal(props.text, props.tooltipId);
  }
}

class App extends React.Component {
  state = {
    text: "",
  };

  onDocumentClick = (event) => {
    if (event.target.tagName === "BUTTON") {
      this.setState({ text: event.target.textContent });
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.onDocumentClick);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.onDocumentClick);
  }

  render() {
    return (
      <div>
        {this.props.children}
        <Tooltip text={this.state.text} tooltipId={this.props.tooltipId} />
      </div>
    );
  }
}

export default App;
