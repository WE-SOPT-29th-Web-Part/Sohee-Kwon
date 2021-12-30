import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Result from "./components/result/Result";
import { UserData, ChangeUserData, Status } from "./types/interface";

function App() {
  const [userData, setUserData] = useState<UserData>({
    data: null,
    status: Status.IDLE,
  });

  const changeUserData: ChangeUserData = (data, status) => {
    setUserData({ ...userData, data: data, status: status });
  };

  return (
    <div className="App">
      <Header />
      <SearchBar userData={userData} changeUserData={changeUserData} />
      <Result userData={userData} changeUserData={changeUserData} />
    </div>
  );
}

export default App;
