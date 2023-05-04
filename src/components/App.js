import React, { useEffect, useState } from "react";
import { Register } from "./";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
        setToken(window.localStorage.getItem("token"));
      }
  }, [])

  return (
    <div>
      <Register setToken={setToken} />
    </div>
  );
}



export default App;
