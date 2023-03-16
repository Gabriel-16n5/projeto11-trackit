import React, { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/Logo.PNG"
import MyContext from "../context/MyContext.ts"

function Login(){
    const {user, setUser, pass, setPass} = useContext(MyContext)
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

            <button>
                Entrar
            </button>
            <h5>
               <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link> 
            </h5>
        </FormContainer>


    </PageContainer>
    )
}

export default Login;

const PageContainer = styled.div`
    background: #FFFFFF;
    height: 100vw;
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