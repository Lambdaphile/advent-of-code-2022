/**
 * For challenge descripton: https://adventofcode.com/2022/day/1
 */
import path from "path";
import R from "ramda";
import { parseFile } from "../../utils";

const chunkify = (chunks, str) => {
  if (R.isEmpty(str)) return R.concat(chunks, [[]]);

  const lastChunkIndex = chunks.length - 1;
  const lastChunk = chunks[lastChunkIndex];
  chunks[lastChunkIndex] = R.concat(lastChunk, [str]);

  return chunks;
};
const parseChunks = (chunk) => chunk.map(Number);
const sum = (sum, n) => sum + n;
const sumChunks = (chunks, chunk) => chunks.concat(chunk.reduce(sum, 0));
const max = (max, n) => (max < n ? n : max);
const desc = (a, b) => a - b;

const pathToData = path.resolve(__dirname, "data.txt");
const calories = parseFile(pathToData);

const smth = R.pipe(R.reduce(sum, 0));
console.log("smth", smth([1, 2, 3]));

// const maxCalorieChunkSum = calories
//   .reduce(chunkify, [[]])
//   .map(parseChunks)
//   .reduce(sumChunks, [[]])
//   .reduce(max, Number.MIN_SAFE_INTEGER);
const maxCalorieChunkSum = R.pipe(
  R.reduce(chunkify, [[]]),
  R.map(parseChunks),
  R.reduce(sumChunks, [[]]),
  R.reduce(max, Number.MIN_SAFE_INTEGER)
)(calories);
const maxThreeCalorieChunksSum = calories
  .reduce(chunkify, [[]])
  .map(parseChunks)
  .reduce(sumChunks, [[]])
  .sort(desc)
  .slice(-3)
  .reduce(sum, 0);

const challenge1Answers = {
  answer1: maxCalorieChunkSum,
  answer2: maxThreeCalorieChunksSum
};

export default challenge1Answers;
