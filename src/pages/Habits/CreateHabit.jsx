import styled from "styled-components";
import axios from "axios"
import React, { useContext } from "react"
import MyContext from "../MyContext.ts"

function CreateHabit(){
    const {habitName, setHabitName, habitDays, setHabitDays} = useContext(MyContext)
    const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [btClicado, setBtClicado] = React.useState("");

    function marcaDIa(index){
        setBtClicado([...btClicado, index])
    }




    function createHabit(e){
        e.preventDefault();
        const body = {
                name: "Nome do hábito",
                days: [1, 3, 5] // segunda, quarta e sexta
            }

       const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body)
       promise.then((ok) => {
       });
       promise.catch((erro) => console.log(erro.message));
       promise.catch(() => alert("Deu ruim"));
    }



    return(
    <>
        <CreateHabitContainer data-test="habit-create-container">
                <input data-test="habit-name-input"
                placeholder="nome do hábito" 
                value={habitName}
                onChange={(e) => {setHabitName(e.target.value)}}
                />
                    <Botoes>
                        {diasDaSemana.map((d, index) => <Buttons data-test="habit-day" bt={btClicado.includes(index)} key={index} onClick={() => marcaDIa(index)} >{d}</Buttons>)}
                    </Botoes>
                    <div>
                        <Confirma data-test="habit-create-cancel-btn" color={"white"} letra={"#52B6FF"}>Cancelar</Confirma>
                        <Confirma data-test="habit-create-save-btn" color={"#52B6FF;"} letra={"white"} >Salvar</Confirma>
                    </div>
        </CreateHabitContainer>


     </>
    )
}

export default CreateHabit;

const Confirma = styled.button`
    width: 84px;
    height: 35px;
    left: 257px;
    top: 277px;
    background: ${props => props.color};
    color: ${props => props.letra};
    border-radius: 5px;
    margin-right: 10px;
    margin-top: 18px;
    border: none;
    font-family: 'Lexend Deca';
    font-size: 16px;
    line-height: 20px;
    text-align: center;
`

const Botoes = styled.span`
    margin-left: 20px;
    margin-bottom: 15px;
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



const CreateHabitContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90vw;
    height: 30vh;
    background: #FFFFFF;
    border-radius: 5px;
input{
    margin-left: 20px;
    width: 75vw;
    border: 2px solid #DBDBDB;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #666666;
}
div{
    
    display:flex;
    flex-direction: row;
    justify-content: flex-end
}
`