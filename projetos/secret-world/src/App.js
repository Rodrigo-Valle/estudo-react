import './App.css';

import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

import { useCallback, useEffect, useState } from 'react';

import { wordsList } from "./data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
];

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setpickedWord] = useState("");
  const [pickedCategory, setpickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [chances, setChances] = useState(3);
  const [score, setScore] = useState(0);


  // Seleciona uma categoria e uma palavra desta categoria randomicamente
  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words]);
  
  // Inicia o jogo
  const startGame = useCallback(() => {

    clearLetterStates();

    const { word, category } = pickWordAndCategory();

    let letters = word.split('');
    letters = letters.map((l) => l.toLowerCase());

    setpickedWord(word);
    setpickedCategory(category);
    setLetters(letters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  // Verifica se o array de letras contem a letra informada
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) return;

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ]);

      setChances((actualChances) => actualChances - 1);
    }
  };

  // Volta para o inicio do jogo
  const retry = () => {
    setScore(0);
    setChances(3);
    setGameStage(stages[0].name);
  };

  useEffect(() => {
    if (chances === 0) {
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [chances]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => actualScore += (uniqueLetters.length * 100));
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          chances={chances}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
