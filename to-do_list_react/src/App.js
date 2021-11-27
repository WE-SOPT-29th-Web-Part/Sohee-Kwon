import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("both");

  return (
    <div className="App">
      <Header />
      <Nav setMode={setMode} />
      <main className="todos">
        {mode === "tomorrow" || <ToDoList type={"today"} />}
        {mode === "today" || <ToDoList type={"tomorrow"} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
