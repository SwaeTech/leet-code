import { productExceptSelf, productExceptSelf_ON } from "./answer.js";
import { compareArray } from "../../TestBed/test-utilities.js";

const answer1 = productExceptSelf([1, 2, 3, 4]);
console.log(compareArray([24,12,8,6], answer1));

const answer2 = productExceptSelf_ON([1, 2, 3, 4]);
console.log(compareArray([24,12,8,6], answer1));

const answer3 = productExceptSelf_ON([-1,1,0,-3,3]);
console.log(compareArray([0,0,9,0,0], answer3));