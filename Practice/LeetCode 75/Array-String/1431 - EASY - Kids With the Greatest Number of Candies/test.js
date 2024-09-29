import { kidsWithCandies } from "./answer.js";
import { compareArray, compareString } from "../../../TestBed/test-utilities.js";

const answer1 = kidsWithCandies([2,3,5,1,3], 3);
console.log(compareArray(answer1, [true,true,true,false,true]));

const answer2 = kidsWithCandies([4,2,1,1,2], 1);
console.log(compareArray(answer2, [true,false,false,false,false]));

const answer3 = kidsWithCandies([12,1,2], 10);
console.log(compareArray(answer3, [true,false,true]));