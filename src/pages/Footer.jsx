import styled from "styled-components";
import React from "react";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Footer(){
    const percentage = 66;


    return(
        <RodaPe>
            <h3>Hábitos</h3>
            <div >
                <CircularProgressbar value={percentage} text={`Hoje`} 
                styles={buildStyles({    pathColor: `rgba(255, 255, 255, 1)`,
                textColor: 'white',
                trailColor: '#52B6FF'})}/>
            </div>
            <h3>Histórico</h3>
        </RodaPe>
    )
}

export default Footer;

const RodaPe = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    left: 0px;
    background: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    bottom: 0px;
    h3 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
    div{
        width: 91px;
        height: 91px;
        border-radius: 50%;
        background-color:#52B6FF;
    }
`