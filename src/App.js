import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Burger from "./components/Burger";
import { Generate } from "./components/Button";

function App() {
  const [burgers, setBurgers] = useState([]);
  const [chosen, setChosen] = useState(null);

  useEffect(() => {
    fetchBurgers();
  }, []);

  const fetchBurgers = () => {
    try {
      fetch("https://burgers1.p.rapidapi.com/burgers", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "burgers1.p.rapidapi.com",
          "x-rapidapi-key":
            "773a0080b0mshba0cd01c1b1efcap1225e2jsn317bf75748f1",
        },
      })
        .then((response) => response.json())
        .then((data) => setBurgers(data));
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <div className="App container">
      <Header />
      <Generate burgers={burgers} setChosen={setChosen} />
      <Burger chosen={chosen} />
    </div>
  );
}

export default App;
