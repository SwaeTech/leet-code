import { gcdOfStrings } from "./answer.js";
import { compareString } from "../../../TestBed/test-utilities.js";

const answer1 = gcdOfStrings("ABCABC", "ABC");
console.log(compareString("ABC", answer1));

const answer2 = gcdOfStrings("ABABAB", "ABAB");
console.log(compareString("AB", answer2));

const answer3 = gcdOfStrings("LEET", "CODE");
console.log(compareString("", answer3));