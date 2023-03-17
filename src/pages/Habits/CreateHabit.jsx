import styled from "styled-components";
import axios from "axios"
import React, { useContext, useEffect } from "react"
import MyContext from "../MyContext.ts"

function CreateHabit(){
    const {habitName, setHabitName, habitDays, setHabitDays, token, setHabitList, setCreateHabit} = useContext(MyContext)
    const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [wait, setWait] = React.useState(false);

    function cancel(){
        setCreateHabit(undefined);
    }

    function marcaDIa(index){
        if(habitDays.includes(index)){
            setHabitDays([])
        }else{
            setHabitDays([...habitDays, index])
        }
    }

    function createHabit(e){
        e.preventDefault();
        setWait(!wait)
        if(habitName === ""){
            alert("Não pode ser vazio")
            setWait(false)
            return;
        }
        const config = {
            headers: { Authorization: `Bearer ${token}`}
        }

        const body = {
            name: habitName,
            days: habitDays
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
        promise.then((ok) => {
            console.log(ok.data)
            setHabitList(ok.data)
            setCreateHabit(undefined)
        })

        promise.catch((erro) => {
            console.log(erro.response.data)
            setCreateHabit(undefined)
        })
        console.log(body)
    }



    return(
        <CreateHabitContainer data-test="habit-create-container" onSubmit={createHabit} >
                <input data-test="habit-name-input"
                placeholder="nome do hábito"
                disabled={wait}
                value={habitName}
                onChange={(e) => {setHabitName(e.target.value)}}
                />
                    <Botoes >
                        {diasDaSemana.map((d, index) => <Buttons type="button" disabled={wait} data-test="habit-day" bt={habitDays.includes(index)} key={index} onClick={() => marcaDIa(index)} >{d}</Buttons>)}
                    </Botoes>
                    <div>
                        <Confirma disabled={wait} data-test="habit-create-cancel-btn" color={"white"} letra={"#52B6FF"} onClick={() => cancel()}>Cancelar</Confirma>
                        <Confirma disabled={wait} type="submit" data-test="habit-create-save-btn" color={"#52B6FF;"} letra={"white"} >Salvar</Confirma>
                    </div>
        </CreateHabitContainer>
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
const Buttons = styled.button`
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