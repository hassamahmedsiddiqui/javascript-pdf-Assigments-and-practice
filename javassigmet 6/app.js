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

// var text = "The quick brown fox jumps over the lazy dog."
// document.write("Text: " + text + "<br>");
// var arr = text.split(" ");
// var arr2 = [];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "The" || arr[i] === "the") {
//         arr2.push(arr[i]);
//     }
// }
// document.write("There are " + arr2.length + " occurrence(s) of 'the'");