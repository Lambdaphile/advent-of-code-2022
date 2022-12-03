import path from "path";
import { parseFile } from "../../utils";

const pathToData = path.resolve(__dirname, "data.txt");
const encryptedStrategyGuide = parseFile(pathToData);

// const MOVES = {
//   X: 1,
//   Y: 2,
//   Z: 3
// };

const MOVES = {
  "A X": 3,
  "A Y": 1,
  "A Z": 2,
  "B X": 1,
  "B Y": 2,
  "B Z": 3,
  "C X": 2,
  "C Y": 3,
  "C Z": 1
};

const OUTCOMES = {
  "A X": 0,
  "A Y": 3,
  "A Z": 6,
  "B X": 0,
  "B Y": 3,
  "B Z": 6,
  "C X": 0,
  "C Y": 3,
  "C Z": 6
};

const calcRoundScore = (totalScore, round) => {
  const [, playerMove] = round.split(" ");

  return totalScore + MOVES[round] + OUTCOMES[round];
};

const totalScore = encryptedStrategyGuide.reduce(calcRoundScore, 0);
console.log({ totalScore });

const challenge2Anaswers = {
  answer1: null,
  answer2: null
};

export default challenge2Anaswers;
