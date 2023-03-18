import NavBar from "../NavBar";
import Footer from "../Footer";
import styled from "styled-components";
import MyHabits from "./MyHabits";
import React, { useContext, useEffect } from "react"
import MyContext from "../MyContext.ts"
import CreateHabit from "./CreateHabit";
import axios from "axios";



function Habits(){
    const {habitList, createHabit, serverList, setServerList, token} = useContext(MyContext)

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}`}
        }
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        promise.then((ok) => {
            setServerList(ok.data)
            console.log(ok.data)
        })
        promise.catch((erro) => console.log(erro.response.data))
    }, [habitList, createHabit, serverList, createHabit])

    return(
        <>
            <NavBar />
                <HabitsContainer>          
                    <MyHabits />
                    {createHabit=== undefined ? "" : <CreateHabit />}
                    {habitList === null ? <SemNada>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</SemNada> : ""}
                </HabitsContainer>
            <Footer/>
        </>
    )
}

export default Habits;

const HabitsContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SemNada = styled.h6`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    margin-top: 10px;
    margin-left: 5vw;
`