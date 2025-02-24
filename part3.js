"4.5"; //4.5 parseFloat
"4"; // 4 parseInt
// Number(value)
console.log(Number("4.5"));
console.log(Number("4"));
console.log(Number("abccsas"));
// NaN: Not a Number
console.log(Number(undefined)); //NaN
console.log(Number(null)); // 0
console.log(Number(false)); // 0
console.log(Number("")); // 0
console.log(Number(NaN)); //0
// falsy values
console.log(Number(true)); // 1
// String(value)
console.log(String(4.5)); // "4.5"
console.log(String(null)); // "null"
console.log(String(undefined)); //"undefined"
console.log(String(NaN));
// Boolean(value) -> true or false
console.log("Boolean of zero:"  + Boolean(0));
// type coercion
// + - * /
// weird
console.log(1 + 2);
console.log(10 + "10"); //1010
console.log("10" - 10); //0
console.log(null + ""); //"null"
console.log(null + undefined); // NaN
console.log("" - 1); // /1