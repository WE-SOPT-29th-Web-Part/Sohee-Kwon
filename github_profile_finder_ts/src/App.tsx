import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { UserData, Status } from "./lib/interface";

function App() {
  const [userData, setUserData] = useState<UserData>({
    data: null,
    status: Status.IDLE,
  });

  return (
    <div className="App">
      <Header />
      <SearchBar userData={userData} setUserData={setUserData} />
    </div>
  );
}

export default App;
