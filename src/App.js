import "./styles.css";
import React, { useState } from "react";
import Show from "./Show";
export default function App() {
  const initialData = [
    { id: 1, Name: "Apple" },
    { id: 2, Name: "Banana" },
    { id: 3, Name: "Mango" },
    { id: 4, Name: "Papaya" },
    { id: 5, Name: "Watermelon" },
    { id: 6, Name: "Pineapple" },
    { id: 7, Name: "Kiwi" },
    { id: 8, Name: "Orange" }
  ];
  const [display, setDisplay] = useState(initialData);
  function handleInput(Name) {
    setDisplay(display.filter((item) => item.Name === Name));
  }
  return (
    <div className="App">
      <Show display={display} handleInput={handleInput} />
    </div>
  );
}
