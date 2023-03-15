import styled from "styled-components";

function NavBar(){
    return(
        <Header>
            <a>TrackIt</a>
            <img src="https://media.discordapp.net/attachments/551138705180721167/1085360159800447027/image.png?width=415&height=468" alt="foto perfil" />
        </Header>
    )
}

export default NavBar;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        padding-left: 18px;
        width: 97px;
        height: 49px;
        left: 18px;
        top: 10px;
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }
    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
        margin-right: 18px;
    }
`