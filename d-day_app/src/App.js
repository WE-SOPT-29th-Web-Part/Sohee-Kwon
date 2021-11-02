import CenterText from "./components/CenterText";
import DateInput from "./components/DateInput";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const setToday = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return { year, month, day };
  };

  const [date, setDate] = useState(setToday());

  return (
    <div className="App">
      <Header />
      <DateInput date={date} setDate={setDate} setToday={setToday} />
      <CenterText />
      <Result date={date} setDate={setDate} type={"d+day"} />
      <Result date={date} setDate={setDate} type={"d-day"} />
      <Footer />
    </div>
  );
}

export default App;
