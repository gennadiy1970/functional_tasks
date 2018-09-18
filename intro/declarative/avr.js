const array = [1,2,3,5,8,13,21,34,55,89];

// get average

// imperative
function imperativeAVR (arr) {
    let sum = 0;
    const length = arr.length;
    for (let i = 0; i < length; i += 1) {
        sum += arr[i]
    }
    return sum / length;
}

// declarative functional style
function declarativeAVR (arr, callback) { 
    return callback(arr)/arr.length;
}

// functional style
declarativeAVR(array ,sumOfArraysElements)
declarativeAVR(array ,multOfArraysElements)


// callback
function sumOfArraysElements (arr) {
    let sum = 0;
    const length = arr.length;
    for (let i = 0; i < length; i += 1) {
        sum += arr[i]
    }
    return sum
}
function multOfArraysElements (arr) {
    let mult = 1;
    const length = arr.length;
    for (let i = 0; i < length; i += 1) {
        mult *= arr[i]
    }
    return mult
}