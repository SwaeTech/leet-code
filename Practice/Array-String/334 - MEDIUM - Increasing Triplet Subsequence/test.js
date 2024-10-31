import { increasingTriplet } from "./answer.js";
import { compareBoolean } from "../../TestBed/test-utilities.js";

const answer1 = increasingTriplet([1,2,3,4,5]);
console.log(compareBoolean(true, answer1));

const answer2 = increasingTriplet([2,4,-2,-3]);
console.log(compareBoolean(false, answer2));

const answer3 = increasingTriplet([20,100,10,12,5,13]);
console.log(compareBoolean(true, answer3));

