import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="tv" element={<Tv />}></Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="movies/:movieId" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
