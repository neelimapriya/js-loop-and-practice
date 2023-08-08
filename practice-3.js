// display ajke amar mon valo nei for 39 times
for(var num = 1; num <= 39; num++ ){
    console.log(num)
    console.log('ajke amar mon valo nei')
}

// display numbers between 58 to 98
for(var num = 58; num<=98; num++){
    console.log(num)
}

// show all even numbers from 412 to 456
for(var num = 412; num<=456; num +=2){
    console.log(num)
}


// show all odd numbers 581 to 623
for(var num = 581; num<=623; num +=2){
    console.log(num)
}


// Declare an array for all the topics that you have learned last few days and display then as output
var arr=['array', 'comparison', 'conditional', 'index', 'multiple condition', 'multi stage condition', 'nested condition', 'push & pop', 'reminder', 'variable', 'loops', 'even & odd numbers', 'break & continue', 'reverse'];
console.log(arr)


// create an array for all the mobile phones. Display all the elements of the array by using while loop
var mobilePhones=[ 'samsung', 'iphone', 'huawei'];
var i=0;
while(i<mobilePhones.length){
    console.log(mobilePhones[i]);
    i++;
}
// Run a loop from 30 to 86. this loop will stop if the values get higher than 44.
for (var i=30; i<=86; i++){
    console.log(i)
    if(i >= 44){
        break;
    }  
}


// Write the price of the book that you have. Display the prices if the price is lower than 200.
var bangla=150;
var english=200;
var math=175;
var physics=190;
var chemistry =230;
var biology= 210;
var islam=195;
var zoology =220;
