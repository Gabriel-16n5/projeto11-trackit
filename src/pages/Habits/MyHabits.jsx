import React, { useContext, useEffect } from "react"
import styled from "styled-components";
import CreateHabit from "./CreateHabit";
import MyContext from "../MyContext.ts"
import axios from "axios";
import HabitsCreated from "./HabitsCreated";

function MyHabits(){
    const {setCreateHabit, token, habitList, createHabit, setHabitList} = useContext(MyContext)


    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}`}
        }
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        promise.then((ok) => {
            setHabitList(ok.data)
            console.log(habitList)
            
        })
        promise.catch((erro) => console.log(erro.response.data))
    }, [])


    function createHabits(){
        setCreateHabit("create")
    }
    return(
        <>
            <MyHabitsContainer>
                    <h2>Meus hábitos</h2>
                    <button onClick={() => createHabits()} data-test="habit-create-btn">+</button>
            </MyHabitsContainer>
            {habitList === undefined ? "" : <HabitsCreated />}
        </>
    )
}

export default MyHabits;

const MyHabitsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    margin-top: 80px;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        margin-left: 10px;
    }
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4px;
        margin-right: 10px;
        font-family: 'Lexend Deca';
        border: none;
        font-size: 28px;
        font-weight: 400;
        text-align: center;
        color: white;
    }
`