//if you missed data-type => TS will show waring since TS do 'static testing' 
//number, string, boolean
var num = 5;
var str = "hello Typescript";
var isConnected = true;
///////////////////////////////////////////
//special datatype
///////////////////////////////////////////
//any
var abcdef = "any data type, same concept to apply JS";
abcdef = 15;
//unknown--bad practice : Typescript will prevent this datatype
//undenfied, null : as same as JS
///////////////////////////////////////////
//array
///////////////////////////////////////////
var fruits = [];
fruits.push('orange');
fruits.push('banana');
console.log(fruits);
