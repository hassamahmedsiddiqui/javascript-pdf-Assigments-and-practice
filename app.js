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

for (i = 1; i <= 20; i++) {
    document.write (5 * i + ",")   
}




