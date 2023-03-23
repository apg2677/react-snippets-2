// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import React, { useState } from "react";
const App = () => {
  return <List items={["A", "B", "C"]} />;
};
const List = ({ items }) => {
  // Yоur cоdе gоеs hеrе
  const [list, setList] = useState(items);
  const handleClick = (clickedItem) => {
    console.log(clickedItem);
    let tempList = items.filter((item) => {
      return item != clickedItem;
    });
    setList([clickedItem, ...tempList]);
    console.log(tempList);
  };
  return (
    <ul>
      {list.map((item, i) => {
        return (
          <li onClick={() => handleClick(item)} key={i}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default App;
