

// comparison function for testing leet code answers

// simple string comparison
export function compareString(a, b){
    if(a === b){
        return true;
    } else {
        return false;
    }
}

// direct arrray comparisons are impossible, instead compare each index value
export function compareArray(arr1, arr2){
    return arr1.every((v,i)=> v === arr2[i]);
}

// basic boolean comparison
export function compareBoolean(bool1, bool2){
    return bool1==bool2;
}

class node {
    constructor(val = null){
        this.val = val;
        this.next = null;
    }
}

// create linked list from array of values and return the head
export function createLinkedList(arr){
    let dummy = new node();
    let head = new node(arr[0]);
    dummy.next = head;
    for (let i = 1; i < arr.length; i++){
        let nextNode = new node(arr[i]);
        head.next = nextNode;
        head = head.next;
    }
    return dummy.next;
}

export function validateLinkedList(head, arr){
    let i = 0;
    while (head){
        if (arr[i] !== head.val){
            return false;
        }
        head = head.next;
        i++;
    }
    return true;
}

