//const fruit = "orannge";

//switch (fruit) {
  //  case "apple":
    //    console.log("You like to eat apple");
      //  break;

    //case "lemon":
      //  console.log("You like to eat lemon");
        //break;

    //default:
      //  console.log("You like to eat orange");
        //break;
//}
// Ternary operator
const yourAge = 18;
let message = "";
if (yourAge >= 18) {
    message = "You are adult";
} else if(yourAge <=10 ){
    message = "You are still a child";
}

// condition ? true : false

let message2 = yourAge >= 18 ? "You are adult" : "You are still a child";
console.log(message2);

let message3 = yourAge <= 18 ? "You are adult" : yourAge <= 10 ? "You are still a child" : "You are a young boy";
console.log(message3);