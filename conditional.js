// Điều kiện
// if (conditionn) {
//your code here
//}
const isRich = true;
const myMoney = 100;
if (!isRich) {
    console.log("I will buy a new car");
} else if (myMoney > 1000){
    console.log("I will give some money");
} else{
    console.log("I poor");
}
// prompt, confirm, alert
// alert("Your website has been hacked");
//const yourname = prompt("Vui lòng nhập tên của bạn", "");
//console.log(yourname);
//const isYourMoney = confirm("Đây có phải là tiền của bạn không?");
//console.log(isYourMoney);

//Bài 1: Nhập vào số tuổi và kiềm tra nếu số tuổi lớn hơn hoặc bằng 18 thì được coi phim rạp ngược lại thì không
//const yourAge = prompt("Vui lòng nhập vào số tuổi của bạn","");
//console.log(typeof yourAge); //check typeof variable

//let message = "";
//if (Number(yourAge) >= 18 ) {
   // message = "Bạn có thể vào rạp nha";
//} else {
//    message = "Xin lỗi bạn không đủ tuổi";
//}
//console.log(message);
  //alert(message);  

  //Bài 2: Cho 2 số a và b, tìm ra số lớn hơn
  const a = 10;  // Khai báo biến a
  const b = 5;
  
  if (a > b) {
      alert(`Số lớn hơn là số ${a}`);
  } else if (a < b) {
      alert(`Số lớn hơn là số ${b}`);
  } 
  
  
