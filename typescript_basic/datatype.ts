//if you missed data-type => TS will show waring since TS do 'static testing' 

//number, string, boolean
let num:number = 5;
let str:string = "hello Typescript";
let isConnected:boolean = true;

///////////////////////////////////////////
//special datatype
///////////////////////////////////////////
//any
let abcdef:any = "any data type, same concept to apply JS";
abcdef=15;

//unknown--bad practice : Typescript will prevent this datatype
//undenfied, null : as same as JS


///////////////////////////////////////////
//array
///////////////////////////////////////////
let fruits: string[] = [];
fruits.push('orange');
fruits.push('banana');
console.log(fruits);