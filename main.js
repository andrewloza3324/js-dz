//let a = 30;

//while (a > 0) {
// a--;
//console.log(a);
//}

//let a = prompt("enter word");

//let a;

//let b;

//do {
//a = +prompt("enter number 1");

//b = +prompt("enter number 2");
//} while (a + b != 100);
//let a = +prompt("твій рік народження");

//let b = 2023 - a;
//alert(b);

//if (b > 16) {
//alert("OK");
//} else {
//alert("error");
//}

let a = +prompt("enter number");

if (a > 23 && a < 50) {
  alert("OK");
} else {
  alert("error");
}

let b = prompt("enter word").toLowerCase();
let translated = "";

switch (b) {
  case "яблуко":
    {
      translated = "apple";
    }
    break;
  case "машина":
    {
      translated = "car";
    }
    break;
  case "телефон":
    {
      translated = "phone";
    }
    break;
  case "ноутбук":
    {
      translated = "laptop";
    }
    break;
}
console.log(translated);
