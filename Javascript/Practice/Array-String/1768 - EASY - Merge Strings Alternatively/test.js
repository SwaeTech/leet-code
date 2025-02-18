import { mergeAlternately } from "./answer.js";
import { compareString } from "../../../TestBed/test-utilities.js";

const answer1 = mergeAlternately("abc", "pqr");
console.log(compareString(answer1, "apbqcr"));

const answer2 = mergeAlternately("ab", "pqrs");
console.log(compareString(answer2, "apbqrs"));

const answer3 = mergeAlternately("abcd", "pq");
console.log(compareString(answer3, "apbqcd"));
