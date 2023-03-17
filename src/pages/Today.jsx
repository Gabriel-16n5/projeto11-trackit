import dayjs from 'dayjs';
import MyContext from "../context/MyContext.ts"
import React, { useContext, useEffect } from "react"
import Footer from "./Footer";
import NavBar from "./NavBar";
import styled from 'styled-components';
import { FaCheck } from "react-icons/fa";
import { IconContext } from "react-icons";
import axios from 'axios';

function Today(){
    const {token} = useContext(MyContext)
    const [habits, setHabits] = React.useState([])
    
    useEffect(() =>{
        const config = {
            headers: { Authorization: `Bearer ${token}`}
        }

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        promise.then((ok) => {
            console.log(ok.data)
            setHabits(ok.data)
        })

        promise.catch((erro) => console.log(erro.response.data))

    }, [])


    let now = dayjs().format('dddd, DD/MM');
    return(
        <>
        <NavBar />
            <Hoje>
                <h1 data-test="today">{now}</h1>
                <h2 data-test="today-counter">Nenhum hábito concluído ainda</h2>
            </Hoje>
            <HabitContainer>
                <div data-test="today-habit-container">
                    <h3 data-test="today-habit-name">Ler 1 capítulo de livro</h3>
                    <h4 data-test="today-habit-sequence">Sequência atual: 3 dias</h4>
                    <h4 data-test="today-habit-record">Seu recorde: 5 dias</h4>
                </div>
                <IconContext.Provider value={{ color: "#FFFFFF", size: 35 }}><button data-test="today-habit-check-btn"><FaCheck /></button></IconContext.Provider>
            </HabitContainer>
        <Footer />
        </>
    )
}

export default Today;

const Hoje = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 15px;
h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    margin-bottom: 3px;
}
h2{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
}
`

const HabitContainer = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    width: 85vw;
    height:13vh;
    background: #FFFFFF;
    border-radius: 5px;
    margin-left: 15px;
    margin-top: 15px;
button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 69px;
    height: 69px;
    left: 276px;
    top: 190px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
}
h3{
    font-family: 'Lexend Deca';
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 15px;
}
h4{
    font-family: 'Lexend Deca';
    font-size: 13px;
    line-height: 16px;
    color: #666666;
}
`