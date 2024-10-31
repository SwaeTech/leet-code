

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