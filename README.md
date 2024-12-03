# Tic-Tac-Toe Game

Este é um projeto de um jogo do galo (Tic-Tac-Toe) desenvolvido em **React**. O objetivo do jogo é alinhar três símbolos iguais em uma linha, coluna ou diagonal.

## Funcionalidades

- Dois jogadores: **"X"** e **"O"**.
- Alternância automática entre os jogadores.
- Verificação de vencedor.
- Indicação de empate.
- Histórico de jogadas.

## Estrutura do Projeto

- **`App.jsx`**: Componente principal que gerencia o estado do jogo e renderiza os componentes filhos.
- **`GameBoard.jsx`**: Componente que renderiza o tabuleiro do jogo.
- **`Player.jsx`**: Componente que exibe informações sobre os jogadores.
- **`Log.jsx`**: Componente que exibe o histórico de jogadas.
- **`winning-combinations.js`**: Arquivo que contém todas as combinações de vitória.

## Acesso

Acesse o projeto em: [Tic-Tac-Toe Game](https://rodrigopestana35.github.io/Tic-Tac-Toe-project/)

## Como Jogar

1. Clique em uma célula do tabuleiro para fazer uma jogada.
2. O jogo alternará automaticamente entre os jogadores **"X"** e **"O"**.
3. O vencedor será indicado quando uma linha, coluna ou diagonal for completada com o mesmo símbolo.
4. Em caso de empate, uma mensagem será exibida.

## Detalhes da Implementação

### **App.jsx**
- Gerencia o estado do jogo, incluindo turnos, jogadores e o estado do tabuleiro.
- Verifica o vencedor após cada jogada.
- Renderiza os componentes **Player**, **GameBoard** e **Log**.

### **GameBoard.jsx**
- Renderiza o tabuleiro do jogo.
- Recebe o estado do tabuleiro e a função de seleção de célula como props.

### **Player.jsx**
- Exibe informações sobre os jogadores, incluindo o símbolo atual e de quem é a vez de jogar.

### **Log.jsx**
- Exibe o histórico de jogadas realizadas durante a partida.

---

Desenvolvido com paixão por [Rodrigo Pestana](https://github.com/rodrigopestana35).
