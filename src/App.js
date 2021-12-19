// import logo from './logo.svg';
import './App.css';
import { Routes, Route, } from "react-router-dom";
import Home from "./pages/index";
import ThemeContext from "./components/theme";

function App() {
  return (
    <ThemeContext>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </ThemeContext>
  );
}

export default App;
