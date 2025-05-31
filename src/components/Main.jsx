import { useState } from "react";
import { nanoid } from "nanoid";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

import Die from "./Die";

export default function Main() {
  const { width, height } = useWindowSize();

  const generateAllNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  };

  const [dice, setDice] = useState(() => generateAllNewDice());

  let gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  const handleRollDice = () => {
    if (gameWon) {
      setDice(generateAllNewDice());
    } else {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    }
  };

  const hold = (id) => {
    setDice((prevDice) => {
      return prevDice.map((el) => {
        if (el.id === id) {
          return { ...el, isHeld: !el.isHeld };
        } else {
          return el;
        }
      });
    });
  };

  const diceElements = dice.map((die) => {
    return (
      <Die
        key={die.id}
        id={die.id}
        value={die.value}
        isHeld={die.isHeld}
        handleHold={hold}
      />
    );
  });

  return (
    <main className="flex flex-col items-center py-10 gap-y-3 mx-3 sm:mx-auto mt-20 size-full md:mt-50 md:size-[600px] rounded-[10px] bg-[#f0eaea]  font-Karla">
      {gameWon && <Confetti width={width} height={height} />}
      <h1 className="text-5xl font-bold text-[#2B283A]">Tenzies</h1>
      <p className="text-center text-2xl text-[#4A4E74] font-normal w-[70%] line-clamp-3">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid grid-cols-5 gap-5 my-5">{diceElements}</div>
      <button
        className="bg-[#5035FF] w-auto px-3 h-[35px] text-white font-medium text-lg text-center font-Karla shadow-lg rounded-[5px] hover:bg-[#5035FF]/80 transition duration-300 ease-in-out"
        onClick={handleRollDice}
      >
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
