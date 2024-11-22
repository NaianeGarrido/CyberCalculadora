import { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

// Definição de cores
const buttonHoverBackgroundColor = "#D3D3D3";
const buttonHoverBorderColor = "#000000";
// Cores para os botões
const numberColors = {
  zero: "#FF5733", // laranja
  um: "#33FF57", // Verde
  dois: "#3357FF", // Azul
  tres: "#FF33A8", // Rosa
};

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export const Main = styled.main`
  background-image: url("https://media1.tenor.com/m/BG3Y3VK9vy4AAAAd/cyberchase-pbskids.gif");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

    @media (min-width: 390px),
  (max-width:850px) {
    display: flex;
    width: 100vw;
    /* Largura do iframe */
    text-align: center;
}
`;

export const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const H1 = styled.h1`
  color: pink;
  font-size: 50px;
  margin: 8px;
  margin-top: 30px;
  text-shadow: 2px 2px 0 #000, 2px -2px 0 #000;


`;

export const Input = styled.input`
  width: 30vw;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;

  &::placeholder {
    color: #584754;
    text-align: center;
    font-size: 17px;
  }

`;

export const Button = styled.button`
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  margin: 15px;
  background-color: ${(props) => numberColors[props.numberColor]};
  display: inline;

  &:hover {
    background-color: ${buttonHoverBackgroundColor};
    border: 2px solid ${buttonHoverBorderColor};
    color: black;
  }
`;

export const Resultado = styled.h2`
  padding: 10px;
  color: pink;
  margin: 10px;
  font-size: 80px;
  margin-top: 30px;
  text-shadow: 2px 2px 0 #000, -2px -2px 0 #000;
`;

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  useEffect(() => { 
    const audioElement = new Audio("src/assets/Cyberchase.mp3"); 
    audioElement.loop = true; 
    audioElement.autoplay = true;

  const playAudio = () => { 
    audioElement.play().catch(error => { 
      console.error("Failed to play audio:", error); }); };

    playAudio(); 
    document.addEventListener("click", playAudio); 
    return () => { 
      audioElement.remove(); 
      document.removeEventListener("click", playAudio); 
    }; 
  }, []);

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  return (
    <Main>
      <GlobalStyle />
      <Section>
        <H1>CyberCalculadora</H1>
        <Input
          type="number"
          placeholder="Insira um número"
          onChange={capturandoPrimeiroValor}
        />
        <Input
          type="number"
          placeholder="Insira um número"
          onChange={capturandoSegundoValor}
        />
        <div>
          <Button numberColor="zero" onClick={soma}>
            +
          </Button>
          <Button numberColor="um" onClick={subtracao}>
            -
          </Button>
          <Button numberColor="dois" onClick={multiplicacao}>
            x
          </Button>
          <Button numberColor="tres" onClick={divisao}>
            /
          </Button>
        </div>
        <Resultado>{resultado}</Resultado>
      </Section>     
      
    </Main>
  );
}
