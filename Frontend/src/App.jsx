
import { useState } from "react";
import "./App.css";

import Myroutes from "./Routes/Myroutes.jsx";







function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Myroutes />
      
    </>
  );
}

export default App;
