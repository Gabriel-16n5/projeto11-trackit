import styled from "styled-components";
import React, { useContext, useEffect } from "react"
import MyContext from "../MyContext.ts"
import { FaTrashAlt} from "react-icons/fa";
import { IconContext } from "react-icons";
import axios from "axios";

export default function HabitsCreated(){
    const {habitList, token} = useContext(MyContext)
    const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];



    // useEffect(() => {
    //     const config = {
    //         headers: { Authorization: `Bearer ${token}`}
    //     }
    //     const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
    //     promise.then((ok) => console.log(ok.data))
    //     promise.catch((erro) => console.log(erro.response.data))
    // }, [])



    if(habitList === undefined){
        console.log(habitList)
    }else{
        return(
            <>
            {habitList.map((a) => 
                <HabitsContainer data-test="habit-container">
                    <Title><h1 data-test="habit-name">{a.name}</h1><IconContext.Provider value={{ color: "#666666", size: 15 }}><span data-test="habit-delete-btn"><FaTrashAlt/></span></IconContext.Provider></Title>
                    <Botoes>
                            {diasDaSemana.map((d, index) => <Buttons data-test="habit-day" bt={a.days.includes(index)} key={index} >{d}</Buttons>)}
                    </Botoes>
                </HabitsContainer>
                )}
            </>
        )

    }


}

const Botoes = styled.span`
    margin-top: 10px;
    margin-left: 15px;
    display:flex;
    flex-direction: row;
`
const Buttons = styled.span`
        display:flex;
        flex-direction: row;
        width: 30px;
        height: 30px;
        left: 36px;
        top: 218px;
        background: ${props => props.bt ? "#CFCFCF" : "#FFFFFF"};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-left: 5px;
        font-family: 'Lexend Deca';
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
`
const Title = styled.span`
    display:flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 10px;
h1{
    font-family: 'Lexend Deca';
    font-size: 20px;
    line-height: 25px;
    color: #666666;
}
`

const HabitsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90vw;
    height: 15vh;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 15px;
`