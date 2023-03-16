import dayjs from 'dayjs';
import React from "react"
import Footer from "./Footer";
import NavBar from "./NavBar";
import styled from 'styled-components';

function Today(){
    let now = dayjs().format('dddd, DD/MM');
    return(
        <>
        <NavBar />
            <Hoje>
                <h1>{now}</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </Hoje>
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