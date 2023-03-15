import React from "react"
import styled from "styled-components"
import logo from "../assets/Logo.PNG"

function Register(){
    return(
    <PageContainer>
        <>
            <img src={logo} alt="Logo" />
            <h1>TrackIt</h1>
        </>
        <FormContainer>
            <input
            placeholder="email"
            />

            <input
            placeholder="senha"
            />

            <input
            placeholder="nome"
            />

            <input
            placeholder="foto"
            />

            <button>
                Cadastrar
            </button>

            <h5>
                Já tem uma conta? Faça login!
            </h5>
        </FormContainer>


    </PageContainer>
    )
}

export default Register;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding-top: 50px;
    img{
        width: 50%;
    }
    h1{
        font-family: 'Playball';
        font-size: 71px;
        color: #126BA5;
    }
`

const FormContainer = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0 0 0;
    button {
        align-self: center;
        width: calc(100vw - 40px);
        height: 45px;
        left: 36px;
        top: 381px;
        background-color: #52B6FF;
        border-radius: 6px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        border:none;
    }
    input {
        margin-top: 0;
        margin-bottom: 7px;
        width: calc(100vw - 60px);
        font-family: 'Lexend Deca';
        font-weight: 100;
    }
    h5{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        margin-top: 35px;
        margin-left: 55px;
    }
`