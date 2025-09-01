import {createLinkedList, validateLinkedList} from "../../../TestBed/test-utilities.js";
import {removeNthNode} from "../Remove Node From End of Linked List/answer.js"
 
let testArr = [1,2,3,4,5];
let newList = createLinkedList(testArr);
let finalList = removeNthNode(newList, 3);

let testForList = [1,2,4,5];
let isValid = validateLinkedList(finalList, testForList);
console.log(isValid);

//////

let testArr2 = [5];
let newList2 = createLinkedList(testArr2);
let finalList2 = removeNthNode(newList2, 1);

let testForList2 = [];
let isValid2 = validateLinkedList(finalList2, testForList2);
console.log(isValid2);

//////

let testArr3 = [1,2];
let newList3 = createLinkedList(testArr3);
let finalList3 = removeNthNode(newList3, 2);

let testForList3 = [2];
let isValid3 = validateLinkedList(finalList3, testForList3);
console.log(isValid3);