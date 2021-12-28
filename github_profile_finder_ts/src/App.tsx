import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Result from "./components/result/Result";
import { UserData, Status } from "./types/interface";

function App() {
  const [userData, setUserData] = useState<UserData>({
    data: null,
    status: Status.IDLE,
  });

  return (
    <div className="App">
      <Header />
      <SearchBar userData={userData} setUserData={setUserData} />
      <Result userData={userData} setUserData={setUserData} />
    </div>
  );
}

export default App;
