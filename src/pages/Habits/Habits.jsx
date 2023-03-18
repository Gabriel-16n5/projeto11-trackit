import NavBar from "../NavBar";
import Footer from "../Footer";
import styled from "styled-components";
import MyHabits from "./MyHabits";
import React, { useContext } from "react"
import MyContext from "../MyContext.ts"
import CreateHabit from "./CreateHabit";

function Habits(){
    const {habitList, createHabit, serverList} = useContext(MyContext)
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