import { reverseWords } from "./answer.js";
import { compareString } from "../../../TestBed/test-utilities.js";

let answer1 = reverseWords(" hello world ");
console.log(compareString("world hello", answer1));

let answer2 = reverseWords("a good   example");
console.log(compareString("example good a", answer2));