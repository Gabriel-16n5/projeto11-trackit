import styled from "styled-components";
import MyContext from "../context/MyContext.ts"
import React, { useContext } from "react"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

function Footer(){
    const {progress, setProgress} = useContext(MyContext)
    


    return(
        <RodaPe>
            <Link to="/habitos"><h3>Hábitos</h3></Link>
            <Link to="/hoje"><div >
                <CircularProgressbar value={progress} text={`Hoje`} 
                styles={ buildStyles({   pathColor: `rgba(255, 255, 255, 1)`,
                textColor: 'white',
                trailColor: '#52B6FF'})}/>
            </div></Link>
            <Link to="/historico"><h3>Histórico</h3></Link>
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
        margin-left: 40px;
        margin-right: 40px;
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
        margin-bottom: 50px;
    }
`