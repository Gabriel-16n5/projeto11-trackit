import React from "react"
import NavBar from "../NavBar";
import Footer from "../Footer";
import styled from "styled-components";
import MyHabits from "./MyHabits";

function Habits(){
    return(
        <HabitsContainer>
            <NavBar />
            <MyHabits />

            
            <Footer/>
        </HabitsContainer>
    )
}

export default Habits;

const HabitsContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`