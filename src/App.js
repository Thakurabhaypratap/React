import React, { useState } from "react";
function App() {
  const [counter1, setcounter1] = useState(Math.round(Math.random() * 100));

  const changtxt = () => {
    document.getElementById("btn").innerHTML = "abhay";
  };
  const addval = () => {
    // setcounter1(counter1 + 1);
    setcounter1((prevCounter1)=> prevCounter1 + 1);
    setcounter1((prevCounter1)=> prevCounter1 + 1);
    setcounter1((prevCounter1)=> prevCounter1 + 1);
    // setcounter1(counter1 + 1);
  };
  const removeval = () => {
    setcounter1(counter1 - 1);
  };

  return (
    <div>
      <h1 id="btn">Hello World!</h1>
      {/* <h1>{addval()}</h1> */}
      {console.log("Hello World!")}
      {console.log(setcounter1)}
      {console.log(counter1)}
      <button id="btn" onClick={addval}>
        Click Me and add {setcounter1}
      </button>{" "}
      <br />
      <button id="btn" onClick={removeval}>
        Click Me and Remove val {setcounter1}
      </button>{" "}
      <br />
      <button id="btn" onClick={changtxt}>
        Click Me
      </button>
      <p id="counter1">{counter1}</p>
    </div>
  );
}
export default App;
