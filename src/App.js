import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Habits from "./pages/Habits/Habits";
import Historic from "./pages/Historic"
import Today from "./pages/Today"
import MyContext from "./pages/MyContext.ts"

function App() {
  const [pass, setPass] = React.useState("");
  const [user, setUser] = React.useState("");
  const [name, setName] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [progress, setProgress] = React.useState([1]);
  const [token, setToken] = React.useState("");
  const [habit, setHabit] = React.useState("");
  const [habitName, setHabitName] = React.useState("");
  const [habitDays, setHabitDays] = React.useState([]);
  const [habitList, setHabitList] = React.useState(null);
  const [createHabit, setCreateHabit] = React.useState(undefined);
  const [serverList, setServerList] = React.useState([])
  const [force, setForce] = React.useState([]);

  return (
    <MyContext.Provider value={{ force, setForce ,user, setUser, pass, setPass, name, setName, photo, setPhoto, progress, setProgress, token, setToken, habit, setHabit, habitName, setHabitName, habitDays, setHabitDays, habitList, setHabitList, createHabit, setCreateHabit, serverList, setServerList }}>
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

