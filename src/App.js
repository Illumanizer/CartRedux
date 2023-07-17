import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/app.scss"

function App() {
  return ( 
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}>
  
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
