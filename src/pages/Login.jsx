import axios from "axios"
import React, { useContext } from "react"
import MyContext from "./MyContext.ts"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/Logo.PNG"
import { ProgressBar } from "react-loader-spinner"

function Login(){
    const [wait, setWait] = React.useState(false);
    const navigate = useNavigate();
    const {user, setUser, pass, setPass, setPhoto, setToken} = useContext(MyContext)

    function fazerLogin(e){
        e.preventDefault();
        setWait(!wait)
        const body = {
            email: `${user}`,
            password: `${pass}`
        }

       const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
       promise.then((ok) => {
            setPhoto(ok.data.image)
            setToken(ok.data.token)
            navigate("/hoje")
            console.log(ok.data.token)
       });
       promise.catch((erro) => {
        alert("Deu ruim")
        setWait(false);
        console.log(erro.message)
    });
    }

    return(
        
    <PageContainer>
        <>
            <img src={logo} alt="Logo" />
            <h1>TrackIt</h1>
        </>
        <FormContainer onSubmit={fazerLogin}>
            <input data-test="email-input"
            placeholder="email"
            disabled={wait}
            value={user}
            onChange={(e) => {setUser(e.target.value)}}
            />

            <input data-test="password-input"
            placeholder="senha"
            disabled={wait}
            value={pass}
            onChange={(e) => {setPass(e.target.value)}}
            />

            <button disabled={wait} data-test="login-btn" type="submit">
            {wait === true ? <ProgressBar barColor='white'/>: "Entrar"}
            </button>
            <h5 data-test="singup-link">
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