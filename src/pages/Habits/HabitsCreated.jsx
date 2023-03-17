import styled from "styled-components";
import MyContext from "/home/gabriel16n5/Desktop/projetinhos/projeto11-trackit/src/context/MyContext.ts"
import React, { useContext } from "react"
import { FaTrashAlt} from "react-icons/fa";
import { IconContext } from "react-icons";


export default function HabitsCreated(){
    const {habit, setHabit} = useContext(MyContext)

    const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [btClicado, setBtClicado] = React.useState("");

    function marcaDIa(index){
        setBtClicado([...btClicado, index])
    }

    return(
        <HabitsContainer>
            <Title><h1>Ler 1 capítulo de livro</h1><IconContext.Provider value={{ color: "#666666", size: 15 }}><span><FaTrashAlt/></span></IconContext.Provider></Title>
            <Botoes>
                    {diasDaSemana.map((d, index) => <Buttons data-test="habit-day" bt={btClicado.includes(index)} key={index} onClick={() => marcaDIa(index)} >{d}</Buttons>)}
            </Botoes>
        </HabitsContainer>
    )
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