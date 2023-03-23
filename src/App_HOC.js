// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import React from "react";

let items = [
  { href: "https://www.google.com", text: "Google" },
  { href: "https://www.bing.com", text: "Bing" },
];
const App = () => {
  return <LinkList items={items} />;
};
function withList(ItemComponent, items) {
  class HOC extends React.Component {
    render() {
      return;
    }
  }
}

class Link extends React.Component {
  render() {
    return <a href={this.props.item.href}>{this.props.item.text}</a>;
  }
}

const LinkList = withList(Link);

export default App;
