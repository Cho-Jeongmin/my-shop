import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gnb from "./components/Gnb/Gnb";
import Category from "./pages/Category/Category";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Gnb />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/detail" element={<></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
