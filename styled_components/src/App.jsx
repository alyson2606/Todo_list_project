import { useState } from 'react';
import { Paragraph, Wrapper } from './components/wrapper';
import { ButtonStyled } from './components/button';

function App() {
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');

  function handle_click() {
    if (!nome.trim() || !endereco.trim()) { // Verifica se os inputs estão vazios
      alert("Por favor, preencha todos os campos antes de cadastrar.");
      return;
    }

    setCount(prevCount => prevCount + 1); // Incrementa o contador se os campos estiverem preenchidos
    setNome(""); // Limpa os inputs após o cadastro
    setEndereco("");
  }

  return (
    <>
    <h1 style={{color: 'black', textAlign: "center", marginBottom: "20px"}}>CADASTRO DE USUARIOS</h1>
      <Wrapper>
        <Paragraph>
          <span>Endereço:</span> 
          <input 
            type="text" 
            placeholder="Digite seu endereço" 
            value={endereco} 
            onChange={(e) => setEndereco(e.target.value)} // Atualiza o estado
          />
        </Paragraph>

        <Paragraph>
        <span>Nome:</span>
          <input 
            type="text" 
            placeholder="Digite seu Nome COMPLETO" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} // Atualiza o estado
          />
        </Paragraph>

        <ButtonStyled onClick={handle_click}>Cadastrar!</ButtonStyled>

        <h2 style={{ color: "black" }}>Número de cadastrados: {count}</h2>
      </Wrapper>
    </>
  );
}

export default App;
