import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Habits from "./pages/Habits/Habits";
import Historic from "./pages/Historic"
import Today from "./pages/Today"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/cadastro" element={<Register/>} />
        <Route path="/habitos" element={<Habits />} />
        <Route path="/hoje" element={<Today />} />
        <Route path="/historico" element={<Historic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

