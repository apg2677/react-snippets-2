// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import React, { useContext } from "react";
import "./App.css";
const ThemeContext = React.createContext();

const Content = () => {
  const context = useContext(ThemeContext); // change this
  return (
    <section className={`theme-${context.theme}`}>
      <span>Current theme: {context.theme}</span>
      <button onClick={context.switchTheme}>Switch Theme</button>
    </section>
  );
};

function App() {
  const [theme, setTheme] = React.useState("dark");
  const switchTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      <Content />
    </ThemeContext.Provider>
  );
}

export default App;
