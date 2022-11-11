import React, { useState } from "react";

export default function Show(props) {
  const [data, setData] = useState("");
  return (
    <div>
      <h1> Search here </h1>
      <input
        type="text"
        onChange={(e) => setData(e.target.value)}
      /> <br /> <br />
      <button onClick={() => props.handleInput(data)}> click to Search </button>
      {props.display.length > 0 ? (
        props.display.map((item) => <li key={item.id}> {item.Name} </li>)
      ) : (
        <p> No Data to show </p>
      )}
    </div>
  );
}
