import React, { useState } from 'react';
import styles from './Cadastro.module.css'; // Importando o arquivo CSS

type ValorTabuleiro = 'X' | 'O' | null;

const TicTacToe: React.FC = () => {
  const [tabuleiro, setTabuleiro] = useState<ValorTabuleiro[]>(Array(9).fill(null));
  const [proximoX, setProximoX] = useState<boolean>(true);
  const [nomeJogador1, setNomeJogador1] = useState<string>('Lucas');
  const [nomeJogador2, setNomeJogador2] = useState<string>('Andre');
  const [jogoIniciado, setJogoIniciado] = useState<boolean>(false);
  const [vencedor, setVencedor] = useState<ValorTabuleiro | null>(null);
  const [empate, setEmpate] = useState<boolean>(false);

  const handleClick = (indice: number) => {
    if (!jogoIniciado || tabuleiro[indice] || vencedor) {
      return;
    }
    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[indice] = proximoX ? 'X' : 'O';
    setTabuleiro(novoTabuleiro);
    setProximoX(!proximoX);
    setVencedor(calcularVencedor(novoTabuleiro));
    if (!novoTabuleiro.includes(null) && !vencedor) {
      setEmpate(true);
    }
  };

  const renderizarQuadrado = (indice: number) => {
    return (
      <button className={styles.quadrado} onClick={() => handleClick(indice)}>
        {tabuleiro[indice]}
      </button>
    );
  };

  const iniciarPartida = () => {
    if (nomeJogador1 && nomeJogador2) {
      setJogoIniciado(true);
      setEmpate(false);
    }
  };

  const reiniciarPartida = () => {
    setTabuleiro(Array(9).fill(null));
    setProximoX(true);
    setJogoIniciado(false);
    setVencedor(null);
    setEmpate(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      iniciarPartida();
    }
  };

  const reiniciarComMesmosNomes = () => {
    setTabuleiro(Array(9).fill(null));
    setProximoX(true);
    setVencedor(null);
    setEmpate(false);
  };

  return (
    <div>
      {!jogoIniciado ? (
        <div className={styles.cadastrocontainer}>
          Jogador 1 (X) :
          <input
            className={styles.cadastroinput}
            type="text"
            placeholder="Nome do Jogador 1"
            value={nomeJogador1}
            onChange={(e) => setNomeJogador1(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          Jogador 2 (O) :
          <input
            className={styles.cadastroinput}
            type="text"
            placeholder="Nome do Jogador 2"
            value={nomeJogador2}
            onChange={(e) => setNomeJogador2(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={iniciarPartida}>Iniciar Partida</button>
        </div>
      ) : (
        <div>
          <div>
            {!vencedor && !empate ? (
              <div className={styles.status}>Próximo jogador: {proximoX ? nomeJogador1 : nomeJogador2}</div>
            ) : vencedor ? (
              <div className={styles.status}>Vencedor: {vencedor === 'X' ? nomeJogador1 : nomeJogador2}</div>
            ) : (
              <div className={styles.status}>Empate!</div>
            )}
            <div className={styles.linhatabuleiro}>
              {renderizarQuadrado(0)}
              {renderizarQuadrado(1)}
              {renderizarQuadrado(2)}
            </div>
            <div className={styles.linhatabuleiro}>
              {renderizarQuadrado(3)}
              {renderizarQuadrado(4)}
              {renderizarQuadrado(5)}
            </div>
            <div className={styles.linhatabuleiro}>
              {renderizarQuadrado(6)}
              {renderizarQuadrado(7)}
              {renderizarQuadrado(8)}
            </div>
            {vencedor || empate ? (
              <button className={styles.jogo} onClick={reiniciarPartida}>Ir para o cadastro novamente</button>
            ) : null}
            {empate ? (
              <button className={styles.jogo} onClick={reiniciarComMesmosNomes}>Revanche</button>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

function calcularVencedor(quadrados: ValorTabuleiro[]): ValorTabuleiro | null {
  const linhas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < linhas.length; i++) {
    const [a, b, c] = linhas[i];
    if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]) {
      return quadrados[a];
    }
  }
  return null;
}

export default TicTacToe;
