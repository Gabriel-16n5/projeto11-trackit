import axios from "axios"
import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/Logo.PNG"
import MyContext from "../context/MyContext.ts"

function Login(){
    const navigate = useNavigate();
    const {user, setUser, pass, setPass, setPhoto, setToken, token} = useContext(MyContext)

    function fazerLogin(e){
        e.preventDefault();

        const body = {
            email: `${user}`,
            password: `${pass}`
        }

       const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
       promise.then((ok) => {
            setPhoto(ok.data.image)
            setToken(ok.data.token)
            navigate("/hoje")
       });
       promise.catch((erro) => console.log(erro.message));
       promise.catch(() => alert("Deu ruim"));
    }

    return(
        
    <PageContainer>
        <>
            <img src={logo} alt="Logo" />
            <h1>TrackIt</h1>
        </>
        <FormContainer onSubmit={fazerLogin}>
            <input
            placeholder="email"
            value={user}
            onChange={(e) => {setUser(e.target.value)}}
            />

            <input
            placeholder="senha"
            value={pass}
            onChange={(e) => {setPass(e.target.value)}}
            />

            <button type="submit">
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