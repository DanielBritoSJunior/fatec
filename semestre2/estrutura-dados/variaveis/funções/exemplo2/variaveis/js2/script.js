var num = 1; // {1}
num = 3; // {2}
var price = 1.5; // {3}
var myName = 'Daniel'; // {4}
var trueValue = true; // {5}
var nullVar = null; // {6}
var und; // {7}

console.log('num: ' + num);
console.log('myName: ' + myName);
console.log('trueValue: ' + trueValue);
console.log('price: ' + price);
console.log('nullVar: ' + nullVar);
console.log('und: ' + und);

var myVariable = 'global';
var myOtherVariable = 'global';
function myFunction() {
    var myVariable = 'local';
    return myVariable;
}
    function myOtherFunction() {
    myOtherVariable = 'local';
    return myOtherVariable;
}
console.log('myVariable: ' + myVariable); // {1}
console.log('myFunction: ' + myFunction()); // {2}
console.log('myOtherVariable: ' + myOtherVariable); // {3}
console.log('myOtherFunction: ' + myOtherFunction()); // {4}
console.log('myOtherVariable: ' + myOtherVariable); // {5}