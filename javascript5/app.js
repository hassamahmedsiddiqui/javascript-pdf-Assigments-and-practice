// ---------CHAPTER NO # 14 TO 16

//Q NO # 01

//var stdName = []

//Q NO # 02

// var stdName = new Array ();
// console.log(std);

//Q NO # 03

// var stdName = ["HASSAM", "SIDDIQUI","AHMED"];
// console.log(stdName);

//Q NO # 04

// var num = [ 1, 2, 3, 4, 5];
// console.log(num);

//Q NO # 05

// var boolean = [ true, false, false, true];
// console.log(boolean);

//Q NO # 06

// var array = ["SIDDIQUI","25","TRUE"];
// console.log(array);

//Q NO # 07

// var edu = ["SSC","HSC","BCS","BS","BCOM","MS","M.PHILL.","PHD"];
// document.write("<h1>Qualifications :</h1>");
// document.write("<ol><li> "+edu[0]+" </li><li> "+edu[1]+" </li><li> "+edu[2]+" </li><li> "+edu[3]+" </li><li> "+edu[4]+" </li><li> "+edu[5]+" </li><li> "+edu[6]+" </li><li> "+edu[7]+" </li></ol>");

//Q NO # 08

// var std=["ATEHR","OSAMA","ASAD"];
// var num=["320","230","480"];
// var tolt= 500;

// document.write("Score of " +std[0]+ " is "+num[0]+". Percentaage: "+(num[0]/tolt*100)+"%");
// document.write("<br />Score of " +std[1]+ " is "+num[1]+". Percentaage: "+(num[1]/tolt*100)+"%");
// document.write("<br />Score of " +std[2]+ " is "+num[2]+". Percentaage: "+(num[2]/tolt*100)+"%");

//Q NO # 09

// var array=["red","green","orange"];
// document.write(array);

//Q NO # 09(a)

// var color = window.prompt("What color you want to add at start.");
// array.unshift(color);
// document.write(array);

//Q NO # 09(b)

// var color = window.prompt("What color you want to add at end.");
// array.push(color);
// //document.write(array);

//Q NO # 09(c)

// array.unshift("black","white");
// document.write(array);

//Q NO # 09(d)

// array.shift();
// document.write(array);

//Q NO # 09(e)

// array.pop();
// document.write(array);

//Q NO # 09(f)

// var index=window.prompt("Which index you want to add a color.");
// var color = window.prompt("What color you want to add.");
// array.splice(index, 0, color);
// document.write(array);

//Q NO # 09(g)

// var index=window.prompt("Which index you want to delete a color.");
// var color = window.prompt("What color you want to delete.");
// array.splice(index,color);
// document.write(array);

// Q NO # 10

// var scores = [34, 56, 21, 67, 92, 55, 44, 33, 77, 90];
// document.write("Scores of students:" + scores + "</br>");
// scores.sort();
// document.write("Orderd scores of:" + scores + "</br>");

// Q NO # 11


// var cities = ["Karachi","Lahore","Islamabad","Quetta","peshawar"];
// document.write("<h1>Cities List</h1>"+ " " +cities )

// var selectedCities = cities.slice(2,4);
// document.write("<h1>Selected cities list :</h1>");
// document.write(selectedCities);

// Q NO # 12
// var arr =["this","is","my","cat"];
// document.write(arr.join(" "));




// Q NO # 15 
// var manufacture = ["Samsung","Apple","Motorola","Nokia","Sony","Haier"];

// document.write("<select>"+
// "<option>"+manufacture[0]+"</option>"+
// "<option>"+manufacture[1]+"</option>"+
// "<option>"+manufacture[2]+"</option>"+
// "<option>"+manufacture[3]+"</option>"+
// "<option>"+manufacture[4]+"</option>"+
// "<option>"+manufacture[5]+"</option>"+
// "</select>");


// -------------CHAPTER 17 TO 20---------------


//  Q NO # 1

// var mDimensional = [[],[],[]]



// Q NO # 2

// var matrix = [[0,1,2,3],[1,0,1,2],[1,0,1,2]];
// document.write(matrix[0].join(" ") + "</br>");
// document.write(matrix[1].join(" ") + "</br>");
// document.write(matrix[2].reverse().join(" ") + "</br>");


// Q NO # 3

// for(var i = 1; i <= 10; i++){
//     document.write(i + "</br>")
// }


// Q NO # 4

// var num =[1,2,3,4]
// console.log(num)
// var num = prompt("Enter the number for table");
// var len = prompt("Enter lenght multiplication table ")
// for (i = 1; i <= len; i++) {
//     document.write(num+" "+"x"+" "+i+" "+"="+" "+i*num+"<br />")
// }


// var tableNo = prompt("Enter The tabel number that you want to print");
// var tableLength = prompt("Enter the length number");

// document.write("Multiplication table of " + tableNo + " Length " + tableLength + "<br>");

// for (var i = 1; i <= tableLength; i++) {
//     document.write(tableNo + " x " + i + " = " + tableNo * i + "<br>");
// }


//   Q NO # 5 

// var fruits = ["apple","banana","mango","orange","strawbery"];

// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");

// }

// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }


//   Q NO # 6

// document.write("<br><br> Counting: <br><br><br>");

// var counting = [];

// for (var i = 1; i <= 15; i++) {
//     counting.push(i);
// }

// document.write(counting);



// document.write("<br><br> Reverse Counting: <br><br><br>");

// var reverseCounting = [];

// for (var i = 10; i > 0 ; i--) {
//     reverseCounting.push(i);
// }

// document.write(reverseCounting);



// document.write("<br><br> Even: <br><br><br>");

// var even = [];

// for (var i = 0; i <= 20 ; i++) {
//     if (i % 2 === 0) {
//         even.push(i);
//     }
// }

// document.write(even);



// document.write("<br><br> Odd: <br><br><br>");

// var odd = [];

// for (var i = 1; i < 20 ; i++) {
//     if (i % 2 !== 0) {
//         odd.push(i);
//     }
// }

// document.write(odd);



// document.write("<br><br> Series: <br><br><br>");

// var series = [];

// for (var i = 2; i <= 20 ; i++) {
//     if (i % 2 === 0) {
//         series.push(i + "k");
//     }
// }

// document.write(series);


// Q NO # 10

// for (i = 1; i <= 20; i++) {
    // document.write (5 * i + ",")   
// }








// var str = "hassam ahmed";
// var fLetter = str[0].toUpperCase();
// var sLetter = str[7].toUpperCase();
// var letter = fLetter + str.slice(1);
// console.log(letter);





// ************************* Assignment_No_06_Chapter 21 to 25 **************************


//                           Question # 01

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");

// var firstName1stChar = firstName.slice(0, 1);
// var firstNameOthrChar = firstName.slice(1);
// var lastName1stChar = lastName.slice(0, 1);
// var lastNameOthrChar = lastName.slice(1);

// var result = firstName1stChar.toUpperCase() + firstNameOthrChar.toLowerCase() + " " + lastName1stChar.toUpperCase() + lastNameOthrChar.toLowerCase();

 
// // var fullName = firstName.toLowerCase() + " " + lastName.toLowerCase();
// alert(result + " Welcome to my webpage");


//                           Question # 02

// var fovPhone = prompt("Enter your favorite mobile phone");
// document.write("My favorite phone is: " + fovPhone + "<br>");
// document.write("Length of string: " + fovPhone.length);


//                           Question # 03 (without method)

// var nationality = "Pakistani";
// document.write("String: " + nationality + "<br>");

// for (var i = 0; i < nationality.length; i++){
//     if (nationality[i] === "n") {
//         document.write("Index of " + "'" + nationality[i] + "'" + ": " + i)
//     }
// }

//                           Question # 03 (with method)

// var nationality = "Pakistani";
// document.write("String: " + nationality + "<br>");

// var findChar = nationality.indexOf("n");
// if (findChar !== -1){
//     document.write("Index of " + "'" + nationality[findChar] + "'" + ": " + findChar);
// }
// console.log(findChar);


//                           Question # 04

// var str = "Hello world";
// document.write("String: " + str + "<br>");

// var lastchr = str.lastIndexOf("l");
// document.write("Last index of " + "'" + str[lastchr] + "'" + ": " + lastchr);


//                           Question # 05

// var str = "Pakistani";
// document.write("String: " + str + "<br>");

// var char = str.charAt(3);
// document.write("Character at index " + str.indexOf(char) + ": " + char);


//                           Question # 06

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" " + lastName);

// document.write(fullName + " Welcome to my webpage");


//                           Question # 07 (without method)

// var cityName = "Hyderabad";
// for (var i = 0; i < cityName.length; i++){
//     if (cityName.slice(i, i + 5) === "Hyder") {
//         cityName = "Islam" + cityName.slice(i + 5);
//     }
// }

// console.log(cityName);


//                           Question # 07 (with method)

// var citiesName = "Hyderabad";
// document.write("City: " +  citiesName + "<br>");

// var newCityName = citiesName.replace("Hyder", "Islam");
// document.write("After replacement: " + newCityName);


//                           Question # 08 (without method)

// var message = "Ali and Sami are best friends. They play cricket And football together.";

// var arr = message.split(" ");
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "and" || arr[i] === "And"){
//         arr.splice(i,1,"&");
//     }
// }
// document.write(arr.join(" "));


//                           Question # 08 (with method)

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var newMessage = message.replaceAll("and", "&");
// document.write(newMessage);


//                           Question # 09

// var str = "472";
// var strNum = +str;
// document.write("Value: " + str  +  "<br>" + "Type: " + typeof(str) + "<br>");
// document.write("Value: " + strNum  +  "<br>" + "Type: " + typeof(strNum));


//                           Question # 10

// var str = prompt("Enter some text in lowercase");
// document.write("User input: " + str + "<br>");

// document.write("Upper case: " + str.toUpperCase());


//                           Question # 11

// var str = prompt("Enter some text");
// document.write("User Input: " + str + "<br>");

// var str1stChar = str.slice(0, 1);
// var strOtherChar = str.slice(1);
// var result = str1stChar.toUpperCase() + strOtherChar.toLowerCase();
// document.write("Title case: " +  result);


//                           Question # 12

// var num = 35.36;
// var conNumToInt = num.toString();
// conNumToInt = conNumToInt.replace(".","");
// document.write("Number: " + num + "<br>" + "Result: " + conNumToInt);


//                           Question # 13

// var str = prompt("Enter user name");

// for (var i = 0; i < str.length; i++) {
//     if (str[i].charCodeAt() === 33 || str[i].charCodeAt() === 44 || str[i].charCodeAt() === 46 || str[i].charCodeAt() === 64){
//         alert("enter a valid username");
//     }
// }


//                           Question # 14

// var userInput = prompt("Enter item name that you want \n cake,apple pie,cookie,chips,patties")
// var convUserInput = userInput.toLowerCase();

// var items = ["cake","apple pie","cookie","chips","patties"];
// var flag = false;
// for (var i = 0; i < items.length; i++) {
//     if (convUserInput === items[i]) {
//         flag = true;
//         break;
//     }
// }

// if (flag === true){
//     document.write(items[i] + " is available at index " + i + " in our bakery <br>");
// }
// else {
//     document.write("We are sorry. " + convUserInput + " is not available in our bakery");
// }


//                           Question # 15



//                           Question # 16

// var university = "University of Karachi";

// var arr = university.split("");

// for (var i = 0; i < arr.length; i++){
//     document.write(arr[i] + "<br>");
// }


//                           Question # 17

// var str = prompt("Enter some text");
// var lastChar = str.slice(str.length - 1);
// document.write("User input: " + str + "<br>" + "Last character of input: " + lastChar);


//                           Question # 18

var text = "The quick brown fox jumps over the lazy dog."
document.write("Text: " + text + "<br>");
var arr = text.split(" ");
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "The" || arr[i] === "the") {
        arr2.push(arr[i]);
    }
}
document.write("There are " + arr2.length + " occurrence(s) of 'the'");

