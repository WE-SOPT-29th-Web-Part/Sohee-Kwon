import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("both");
  const [todayList, setTodayList] = useState(["hi"]);
  const [tomorrowList, setTomorrowList] = useState(["hello"]);

  return (
    <div className="App">
      <Header />
      <Nav setMode={setMode} />
      <main className="todos">
        {mode === "tomorrow" || (
          <ToDoList type={"today"} list={todayList} setList={setTodayList} />
        )}
        {mode === "today" || (
          <ToDoList
            type={"tomorrow"}
            list={tomorrowList}
            setList={setTomorrowList}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
