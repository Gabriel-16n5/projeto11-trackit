import React from "react";
import styled from "styled-components";

function CreateHabit(){
    const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [btClicado, setBtClicado] = React.useState("");

    function marcaDIa(index){
        setBtClicado([...btClicado, index])
    }

    return(
    <>
        <CreateHabitContainer data-test="habit-create-container">
                <input data-test="habit-name-input" placeholder="nome do hábito" />
                    <Botoes>
                        {diasDaSemana.map((d, index) => <Buttons data-test="habit-day" bt={btClicado.includes(index)} key={index} onClick={() => marcaDIa(index)} >{d}</Buttons>)}
                    </Botoes>
                    <div>
                        <Confirma data-test="habit-create-cancel-btn" color={"white"} letra={"#52B6FF"}>Cancelar</Confirma>
                        <Confirma data-test="habit-create-save-btn" color={"#52B6FF;"} letra={"white"} >Salvar</Confirma>
                    </div>
        </CreateHabitContainer>

        <SemNada>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
        </SemNada>
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

const SemNada = styled.h6`
    /* display: none; */
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    margin-top: 10px;
    margin-left: 5vw;
`

const CreateHabitContainer = styled.form`
    width: 90vw;
    height: 20vh;
    background: #FFFFFF;
    border-radius: 5px;
input{
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