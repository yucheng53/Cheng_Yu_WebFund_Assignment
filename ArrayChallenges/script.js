function alwaysHungry(arr) {
    var food = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
            food ++;
        }
    }
    if(food == 0) {
        console.log("I'm hungry");
    }
}

alwaysHungry([3, 4, 5, 3, 2, 2, 4])


function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

function betterThanAverage(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var aver = sum / arr.length;
    var count = 0;
    for(var j = 0; j < arr.length; j++) {
        if(arr[j] > aver) {
            count ++; 
        }
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

function reverse(arr) {
    // your code here
    for(var i = 0; i <= arr.length/2; i++) {
        var temp = arr[arr.length-1-i];
        arr[arr.length-1-i] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    for(var i = 3; i <= n; i++) {
        fibArr.push(fibArr[i-3]+fibArr[i-2]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



