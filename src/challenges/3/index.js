import path from "path";
import { parseFile } from "../../utils";

const intersection = (...arrays) => {
  return arrays.reduce((intersected, array) =>
    intersected.filter((item) => array.includes(item))
  );
};

const chunkify = (chunks, size, item, index) => {
  // const lastChunkIndex = index - 1;
  // const lastChunk = chunks[lastChunkIndex];
  // const isFull = lastChunk.length === size;
  // if (isFull) {
  //   return chunks.concat([[item]]);
  // }
  // chunks[lastChunkIndex] = lastChunk.concat(item);
  // return chunks;
};

const PRIORITIES = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52
};

const pathToData = path.resolve(__dirname, "data.txt");
const data = parseFile(pathToData);

const itemTypePrioritySum = data.reduce(
  (chunks, item, index) => chunkify(chunks, 3, item, index),
  [[]]
);

const filteredData = data.reduce((acc, curr, i, arr) => {
  if ((i + 1) % 3 === 0) {
    const inter = intersection(arr[i - 2].split(""), arr[i - 1].split(""));
    const inter2 = intersection(inter, curr.split(""));

    return acc + PRIORITIES[inter2[0]];
  }

  return acc;
}, 0);

const x = data.reduce((acc, curr) => {
  const first = curr.slice(0, curr.length / 2);
  const second = curr.slice(curr.length / 2);

  let breaker = false;
  const count = first.split("").reduce((acc, curr) => {
    const repeats = second.includes(curr);

    if (repeats && !breaker) {
      breaker = true;
      return acc + PRIORITIES[curr];
    } else {
      return acc;
    }
  }, 0);
  return acc + count;
}, 0);

const challenge3Answers = {
  answer1: null,
  answer2: null
};
