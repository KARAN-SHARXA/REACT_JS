import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Usercard from "./components/usercard";

function App() {
  return (
    <>
      <div>
        <Usercard
          name="karan"
          description="hi"
          style={{ borderRadius: "10px" }}
        />
        <Usercard name="mukesh" description="bi" />
        <Usercard name="gukesh" description="ti" />
      </div>
    </>
  );
}

export default App;
