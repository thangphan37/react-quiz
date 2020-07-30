import styled, { createGlobalStyle } from "styled-components";
import ImgBackGround from "./images/background.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    display: flex;
    justify-content: center;
    background-position: center;
    background-size: cover;
    margin: 0;
    background-image: url(${ImgBackGround})    
  }

  * {
      font-family: 'VT323', monospace;
      box-sizing: border-box;
   }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 400;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    filter: drop-shadow(2px 2px #0085a3);
    -webkit-background-clip: text;
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  .start,
  .next {
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    height: 40px;
    border-radius: 10px;
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    padding: 0 40px;
    margin: 20px 0;
  }
`;
