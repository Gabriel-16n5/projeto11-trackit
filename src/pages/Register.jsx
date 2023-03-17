import React, { useContext } from "react"
import styled from "styled-components"
import logo from "../assets/Logo.PNG"
import MyContext from "./MyContext.ts"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

function Register(){
    const navigate = useNavigate();
    const {user, setUser, pass, setPass, name, setName, photo, setPhoto} = useContext(MyContext)
    
    function cadastrar(e){
       e.preventDefault();

        const body = {
            email: `${user}`,
            name: `${name}`,
            image: `${photo}`,
            password: `${pass}`
        }

       const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
       promise.then((ok) => navigate("/"));
       promise.catch((erro) => console.log(erro.message));
       promise.catch(() => alert("Deu ruim"));
    }

    return(
    <PageContainer>
        <>
            <img src={logo} alt="Logo" />
            <h1>TrackIt</h1>
        </>
        <FormContainer onSubmit={cadastrar}>
            <input data-test="email-input"
            placeholder="email"
            value={user}
            onChange={(e) => {setUser(e.target.value)}}
            />

            <input data-test="password-input"
            placeholder="senha"
            value={pass}
            onChange={(e) => {setPass(e.target.value)}}
            />

            <input data-test="user-name-input"
            placeholder="nome"
            value={name}
            onChange={(e) => {setName(e.target.value)}}
            />

            <input data-test="user-image-input"
            placeholder="foto"
            value={photo}
            onChange={(e) => {setPhoto(e.target.value)}}
            />

            <button type="submit" data-test="signup-btn">
                Cadastrar
            </button>

            <h5 data-test="login-link">
                <Link to="/">Já tem uma conta? Faça login!</Link>
            </h5>
        </FormContainer>


    </PageContainer>
    )
}

export default Register;

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