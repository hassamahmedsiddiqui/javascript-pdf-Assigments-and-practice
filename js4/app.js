                // -----------Chapters # 9 To 11------------- 


//                           Question # 01

var city = prompt ("Enter city name.");

if (city === "Karachi") {
 alert ("Welcome to city of lights");   
}

//                           Question # 02

// var gender = prompt("Enter your gender?");

// if (gender === "male") {
//     alert ("Good Morning Sir");
// }

// if (gender === "female") {
//     alert ("Good Morning Ma'am");
// }


//                           Question # 03

// var signalColor = prompt("Enter color of road traffic signal");

// if (signalColor === "Red") {
//     alert ("Must Stop");
// }

// if (signalColor === "Yellow") {
//     alert ("Ready to move");
// }

// if (signalColor === "Green") {
//     alert ("Move Now");
// }


//                           Question # 04

// var remainingFule = prompt ("Enter remaining fule");

// if (remainingFule < 0.25) {
//     alert ("Please refill the fule in your car");
// }


//                           Question # 05

// var a = 4; 
// if (++a === 5) { 
//     alert("given condition for variable a is true"); 
// }

// var b = 82;
// if (b++ === 83) { 
//     alert("given condition for variable b is true"); 
// }

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }

// if (c === 13) {
//     alert("condition 2 is true");
// }

// if (++c < 14) {
//     alert("condition 3 is true");
// }

// if (c === 14) { 
//     alert("condition 4 is true"); 
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//     alert ("The cost equals");
// }

// if (true) {
//     alert("True");
// }

// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert ("Car is smaller than cat");
// }


//                           Question # 06

// var sub_1_ObtMarks = +prompt("Enter Subject 1 Obtained Marks");
// var sub_1_TotalMarks = +prompt("Enter Subject 1 Total Marks");

// var sub_2_ObtMarks = +prompt("Enter Subject 2 Obtained Marks");
// var sub_2_TotalMarks = +prompt("Enter Subject 1 Total Marks");

// var sub_3_ObtMarks = +prompt("Enter Subject 3 Obtained Marks");
// var sub_3_TotalMarks = +prompt("Enter Subject 1 Total Marks");

// var totalMarks = sub_1_TotalMarks + sub_2_TotalMarks + sub_3_TotalMarks;
// var totalObtainedMarks = sub_1_ObtMarks + sub_2_ObtMarks + sub_3_ObtMarks;

// var percentage = totalObtainedMarks / totalMarks * 100;

// document.write ("<h1>Marks Sheet</h1>");
// document.write ("Total marks: " + totalMarks + "<br>");
// document.write ("Marks obtained: " + totalObtainedMarks + "<br>");
// document.write ("Percentage: " + percentage + "%" + "<br>");

// if (percentage >= 80) {
//     document.write ("Grade: A-one" + "<br>");
//     document.write ("Remarks: Excellent" + "<br>");
// }

// else if (percentage >= 70) {
//     document.write ("Grade: A" + "<br>");
//     document.write ("Remarks: Good" + "<br>");
// }

// else if (percentage >= 60) {
//     document.write ("Grade: B" + "<br>");
//     document.write ("Remarks: You need to improve" + "<br>");
// }

// else {
//     document.write ("Grade: Fail" + "<br>");
//     document.write ("Remarks: Sorry");
// }


//                           Question # 07

// var num = 7;
// var secrtNum = +prompt ("Enter one number from 1 to 10");
// if (secrtNum === num) {
//     alert ("Bingo! Correct answer");
// }
// else if (secrtNum === ++num) {
//     alert ("Close enough to the correct answer");
// }
// else {
//     alert("Try again");
// }


//                           Question # 08

// var num = +prompt ("Enter the Number");

// var divBy_3 = num % 3;

// if (divBy_3 === 0) {
//     alert (num + " is Divided by 3");
// }
// else {
//     alert (num + " is not divided by 3");
// }


//                           Question # 09

// var num = +prompt("Enter the Number");

// var evenNum = num % 2;
// if (evenNum === 0) {
//     alert (num + " is even number");
// }
// else {
//     alert (num + " is odd number");
// }


//                           Question # 10

// var temp = +prompt("Enter temperature");

// if (temp > 40) {
//     alert("It is too hot outside");
// }
// else if (temp > 30) {
//     alert ("The Weather today is Normal");
// }
// else if (temp > 20) {
//     alert ("Today's Weather is Cool");
// }
// else if (temp > 10) {
//     alert ("OMG! Today’s weather is so Cool");
// }
// else {
//     alert ("OMG! Today’s weather is so Cool");
// }


//                           Question # 11

// var firstNumber = +prompt ("Enter First Number");
// var operator = prompt ("Enter operator \n +,-,*,/,%");
// var secondNumber = +prompt ("Enter Second Number");

// if (operator === "+") {
//     alert (firstNumber + secondNumber);
// }

// else if (operator === "-") {
//     alert (firstNumber - secondNumber);
// }

// else if (operator === "*") {
//     alert (firstNumber * secondNumber);
// }

// else if (operator === "/") {
//     alert (firstNumber / secondNumber);
// }

// else if (operator === "%") {
//     alert (firstNumber % secondNumber);
// }


// =======================Chapters # 12 To 13 ====================

//                           Question # 01

// var charecter = prompt ("Enter Charecter A to Z, a to z, 0 to 9");
// var charecterCon = charecter.charCodeAt();

// if (charecterCon >= "65" && charecterCon <= "90") {
//     alert (charecter + " is Uppercase latter");
// }
// else if (charecterCon >= "97" && charecterCon <= "122") {
//     alert (charecter + " is Lowercase latter");
// } 
// else {
//     alert (charecter + " is Number");
// }



//                           Question # 02

// var num1 = +prompt("Enter Number 1");
// var num2 = +prompt("Enter Number 2");

// if (num1 > num2) {
//     alert (num1 + " is greater than " + num2);
// }
// else if (num1 === num2) {
//     alert (num1 + " is equal to " + num2);
// }
// else {
//     alert (num1 + " is less than " + num2);
// }


//                           Question # 03

// var num = prompt("Enter Number");

// if (num > 0) {
//     alert (num + " is positive Number");
// }
// else if (num < 0) {
//     alert (num + " is negative Number");
// }
// else {
//     alert (num + " is zero");
// }


//                           Question # 04

// var alphabate = prompt("Enter a latter");

// if (alphabate === "a" || alphabate === "e" || alphabate === "i" || alphabate === "o" || alphabate === "u") {
//     alert ("true " + "'" + alphabate + "'" + " is a vowel latter");
// }
// else {
//     alert ("false " + "'" + alphabate + "'" + " is a consonant latter");
// }


//                           Question # 05

// var password = "abc1234";
// var userPassword = prompt ("Enter yor password");

// if (userPassword === password) {
//     alert ("Correct! The password you entered matches the original password");
// }
// else if (userPassword)


//                           Question # 06

// var greeting; 
// var hour = prompt ("Enter hour"); 
// if (hour < 18) { 
//     greeting = "Good day";
// }
// else {greeting = "Good evening"; 
// }
// alert(greeting);

//                           Question # 07

// var userTime = prompt("Enter the time in 24 hour formet");

// if (userTime >= 0000 && userTime < 1200) {
//     aler ("Good Morning");
// }
// else if (userTime >= 1200 && userTime < 1700) {
//     alert ("Good after noon");
// }
// else if (userTime >= 1700 && userTime < 2100) {
//     alert ("Good evening");
// }
// else if (userTime >= 2100 && userTime <= 2359) {
//     alert ("Good evening");
// }
// else {
//     alert ("Invlid time");
// }