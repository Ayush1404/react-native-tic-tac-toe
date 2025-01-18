import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import Topbar from './components/Topbar';
import Board from './components/Board';
import Scores from './components/Scores';
import Actions from './components/Actions';
import Confetti from 'react-native-confetti';

const signs = ['X', 'O', ''];
export type Turn = typeof signs[number];
export type Player = {
  name: string;
  sign: Turn;
  score: number;
};

const winnerPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [1, 4, 7],
  [3, 4, 5],
  [6, 7, 8],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const App = () => {
  const [turn, setTurn] = useState<Turn>('X');
  const [winner, setWinner] = useState<number>(0);
  const [player1, setPlayer1] = useState<Player>({
    name: 'Ayush',
    sign: 'X',
    score: 0,
  });
  const [player2, setPlayer2] = useState<Player>({
    name: 'Shweta',
    sign: 'O',
    score: 0,
  });

  const [board, setBoard] = useState<Array<string>>(new Array(9).fill(''));
  
  const confettiViewRef = useRef<Confetti | null>(null); // Create a ref for Confetti

  useEffect(() => {
    calculateWinner();
  }, [board]);

  function calculateWinner() {
    let winnerSign = '';
    winnerPatterns.forEach((pattern) => {
      if (board[pattern[0]] !== '' && board[pattern[0]] === board[pattern[1]] && board[pattern[1]] === board[pattern[2]]) {
        winnerSign = board[pattern[0]];
      }
    });

    let isDraw = true;
    board.forEach((cell) => {
      if (cell === '') isDraw = false;
    });

    console.log(board);

    if (player1.sign === winnerSign) {
      setWinner(1);
      setPlayer1((prev) => ({
        ...prev,
        score: prev.score + 1,
      }));
      // Trigger confetti
      if (confettiViewRef.current) {
        confettiViewRef.current.startConfetti();
      }
    } else if (player2.sign === winnerSign) {
      setPlayer2((prev) => ({
        ...prev,
        score: prev.score + 1,
      }));
      setWinner(2);
      // Trigger confetti
      if (confettiViewRef.current) {
        confettiViewRef.current.startConfetti();
      }
    } else if (isDraw) {
      setWinner(-1);
    }
  }

  function makeMove(ind: number) {
    if (board[ind] !== '' || winner !== 0) return;
    const newBoard = [...board];
    newBoard[ind] = turn;
    setBoard(newBoard);
    setTurn(turn === 'X' ? 'O' : 'X');
  }

  const resetGame = () => {
    setBoard(new Array(9).fill(''));
    setTurn('X');
    setPlayer1((prev) => ({
      ...prev,
      sign: 'X',
      score: 0,
    }));
    setPlayer2((prev) => ({
      ...prev,
      sign: 'O',
      score: 0,
    }));
    setWinner(0);
    if (confettiViewRef.current) {
      confettiViewRef.current.stopConfetti();
    }
  };

  const nextGame = () => {
    setBoard(new Array(9).fill(''));
    setTurn('X');
    const playerSign1 = player1.sign;
    const playerSign2 = player2.sign;
    setPlayer1((prev) => ({
      ...prev,
      sign: playerSign2,
    }));
    setPlayer2((prev) => ({
      ...prev,
      sign: playerSign1,
    }));
    setWinner(0);
    if (confettiViewRef.current) {
      confettiViewRef.current.stopConfetti();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.appContainer}>
      <Confetti ref={confettiViewRef} />
      <Scores player1={player1} player2={player2} />
      <Board board={board} makeMove={makeMove} />
      <Topbar turn={turn} winner={winner} player1={player1} player2={player2} />
      <Actions
        action1={resetGame}
        action2={nextGame}
        label1="Reset"
        label2="Next"
      />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#ff009d',
    flex: 1,
    justifyContent: 'space-around',
  },
});
