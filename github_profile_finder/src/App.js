import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";

function App() {
  const [userData, setUserData] = useState({ data: null, status: "idle" });

  return (
    <div className="App">
      <Header />
      <SearchBar userData={userData} setUserData={setUserData} />
      <Result userData={userData} setUserData={setUserData} />
    </div>
  );
}

export default App;
