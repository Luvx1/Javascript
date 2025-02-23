// String(chuỗi)
//3 ví dụ về string
//"Hello world";
//"My name is Evondev";
//'I am frontend developer';
// double quotes, single quote, backticks (template literal)
const name = "Khoi";
const job = "Designer";
//console.log(name);
//console.log(typeof name);
const newStr = "My name is Evondev and I am Frontend Developer";
const newStr2 = "My name is " + name + " and I am " + job;
//console.log(newStr2);
// ${variable}
//const newStr3 = `My name is ${name} and I am ${job}`;
//console.log(newStr3);
// .length
//console.log(newStr3.length);
// My name is Khoi and I am Designer -> 0-32 -> length: 33
// index là vị trí của từng kí tự trong chuỗi, (bao gồm cả khoảng trắng)
const myStr = "Frontend Developer D";
console.log(myStr.split(" "));
console.log(myStr.split(""));
console.log(myStr.toLowerCase());
console.log(myStr.toUpperCase());
console.log(myStr.startsWith("Frontend"));
console.log(myStr.endsWith("Developer"));
console.log(myStr.includes("end"));
console.log(myStr.includes("xyz"));
console.log(myStr.indexOf("D"));
console.log(myStr.lastIndexOf("D"));
console.log(myStr.replace("Developer", "Designer"));
console.log(myStr.repeat("5"));
console.log(myStr.slice("0, 5"));
console.log(myStr.slice("-5"));
console.log(myStr.trim()); // remove space left and right
console.log(myStr.trimStart()); //remove space left
console.log(myStr.trimEnd()); // remove space right
const myStr2 = "Frontend";

console.log(myStr2.charAt(1));

// substr -> Lấy ra 1 phần của chuỗi (string)
// substr(index, length) -> index: vị trí, length: số lượng kí tự bạn muốn lấy
console.log(myStr2.substr(1, 5));
// substring -> Lấy ra các kí tự của chuỗi(string)
// substring(start index, end index);
console.log(myStr2.substring(1, 5));

const myStr3 = "     Frontend Developer D     ";
// Loại bỏ khoảng trống 2 bên, đưa tất cả về IN HOA, thay chữ Developer D thành chữ Developer and Designer, sau đó repeat 2 lần;
console.log(myStr3.trim().replace("Developer D", "Developer and Designer").toUpperCase().repeat(2));