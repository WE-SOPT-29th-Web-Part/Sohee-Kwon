import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Article from "./pages/Article";
// import Home from "./pages/Home";
// import Write from "./pages/Write";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/write" element={<h1>Write</h1>} />
          <Route path="/article/:id" element={<h1>Article</h1>} />
          <Route path="/article/edit/:id" element={<h1>Write</h1>} />
          <Route path="/*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
