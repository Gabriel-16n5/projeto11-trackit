import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Habits from "./pages/Habits/Habits";
import Historic from "./pages/Historic"
import Today from "./pages/Today"
import MyContext from "./context/MyContext.ts"

function App() {
  const [pass, setPass] = React.useState("");
  const [user, setUser] = React.useState("");
  const [name, setName] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  return (
    <MyContext.Provider value={{ user, setUser, pass, setPass }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<Historic />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;

