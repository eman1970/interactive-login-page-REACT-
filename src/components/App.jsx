import React, { useState } from "react";

function App() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  function handleF(e) {
    setfName(e.target.value);
  }
  function handleL(e) {
    setlName(e.target.value);
  }


  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}{" "}
      </h1>
      <form>
        <input onChange={handleF} name="fName" placeholder="First Name" />
        <input onChange={handleL} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
