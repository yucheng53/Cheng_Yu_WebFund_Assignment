// print odds 1-20
for(var i = 1; i <= 20; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

// decreasing multiples of 3
for(var i = 100; i >= 0; i--){
    if(i % 3 == 0){
        console.log(i);
    }
}

// print the sequence
var Sequence = [4, 2.5, 1, -0.5, -2, -3.5];
for(var i = 0; i < Sequence.length; i++){
    console.log(Sequence[i]);
}

// sigma
var sum = 0;
for(i = 1; i <= 100; i++){
    sum += i;    
}
console.log(sum);

// factorial
var product = 1;
for(i = 2; i <= 12; i++){
    product *= i;
}
console.log(product);