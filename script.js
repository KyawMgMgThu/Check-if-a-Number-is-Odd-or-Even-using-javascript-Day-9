var x = prompt("Enter your number");
if (x%2 == 0){
    //even
    console.log(`${x} is an even number`);
}
else {
    //odd
    console.log(`${x} is an odd number`);
}
//OR
var res = x%2 == 0 ? "even" : "odd";
console.log(res);