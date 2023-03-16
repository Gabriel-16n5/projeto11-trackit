import React from "react"
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from "styled-components";

function Historic(){
    return(
        <>
        <NavBar />
        <HeaderHistoric><h1>Histórico</h1></HeaderHistoric>
        <HistoricContainer>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </HistoricContainer>
        <Footer />
        </>
        
    )
}

export default Historic;

const HeaderHistoric = styled.span`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 15px;
    margin-bottom: 15px;
h1{
    font-family: 'Lexend Deca';
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
}
`

const HistoricContainer = styled.div`
margin-left: 15px;    

p{
    font-family: 'Lexend Deca';
    font-size: 18px;
    line-height: 22px;
    color: #666666;
}
`