//               // Chapter no 5
//                    Question # 01
// var num = 3 + 5;
// console.log(num)
// document.write("Sum of 3 and 5 is 8")

//                     Question # 02
// var num = 3 - 5;
// console.log(num)

// var num = 3 * 5;
// console.log(num)

// var num = 3 / 5;
// console.log(num)

// var num = 3 % 5;
// console.log(num)


//                       Question # 03
// var num =              variable declaration
// var num = 5
// num++;
// console.log(num)
// var num = num++ + 7;
// console.log(num)
// var num = num - 1
// console.log(num)
// var num = num % 3 ;
// console.log(num);
// document.write("value after variable declaration is undefidend" + "<br>" + "value is 5" + "<br>" + "value after increment is 6" + "<br> " + "value after additon is 13" + "<br>" + "value after is decrement:12 " + "<br>")

//                       Question # 04 
// var ticketprice = 600 * 5 ;
// console.log(ticketprice)
// document.write("<h2>Total cost to buy 6 tickets to a movie is 3000pkr")
//                             Question # 05
// document.write ("<h1> Tabel of 5 </h1>");
// document.write ("5 x 1 = " + 5*1 + "<br>");
// document.write ("5 x 2 = " + 5*2 + "<br>");
// document.write ("5 x 3 = " + 5*3 + "<br>");
// document.write ("5 x 4 = " + 5*4 + "<br>");
// document.write ("5 x 5 = " + 5*5 + "<br>");
// document.write ("5 x 6 = " + 5*6 + "<br>");
// document.write ("5 x 7 = " + 5*7 + "<br>");
// document.write ("5 x 8 = " + 5*8 + "<br>");
// document.write ("5 x 9 = " + 5*9 + "<br>");
// document.write ("5 x 10 = " + 5*10);


//                           Question # 06



//                           Question # 07

// var item_1_Price = 650;
// var item_2_Price = 100;
// var quantityItem_1 = 3;
// var quantityItem_2 = 7;
// var shppingChr = 100;

// var totalCostItem_1 = item_1_Price * quantityItem_1;
// var totalCostItem_2 = item_2_Price * quantityItem_2;
// var totalCostOfOrder = totalCostItem_1 + totalCostItem_2 + shppingChr;

// document.write ("<h1>Shopping Cart</h1>");
// document.write ("Price of item 1 is " + item_1_Price + "<br>");
// document.write ("Quantity of item 1 is " + quantityItem_1 + "<br>");
// document.write ("Price of item 2 is " + item_2_Price + "<br>");
// document.write ("Quantity of item 2 is " + quantityItem_2 + "<br>");
// document.write ("Shipping Charges " + shppingChr + "<br><br><br>");
// document.write ("Total cost of your order is " + totalCostOfOrder);


//                           Question # 08

// var totalMarks = 980;
// var obtMarks = 804;
// var percntg = obtMarks / totalMarks * 100;

// document.write ("<h1>Marks Sheet</h1>");
// document.write ("Total marks: " + totalMarks + "<br>");
// document.write ("Marks obtained: " + obtMarks + "<br>");
// document.write ("Percentage: " + percntg + "%");


//                           Question # 09

// var dollerInToPak = 104.80 * 10;
// var riyalInToPak = 28 * 25;
// var totalInPkr = dollerInToPak + riyalInToPak;

// document.write ("<h1>Currency in PKR</h1>");
// document.write ("Total Currency in PKR: " + totalInPkr);


//                           Question # 10

// var num = 5 + 5 * 10 / 2;
// document.write (num);


//                           Question # 11

// var currentYear = 2016;
// var birthYear = 1992;
// var age = currentYear - birthYear;

// document.write ("<h1>Age Calculator</h1>");
// document.write ("Current Year: " + currentYear + "<br>");
// document.write ("Birth Year: " + birthYear + "<br>");
// document.write ("Your Age is: " + age);


//                           Question # 12



//                           Question # 13

// var fovSnack = "Chocolate Chip";
// var currentAge = 15;
// var maxAge = 65;
// var perDaySnacks = 3;
// var total = (maxAge - currentAge) * 3;

// document.write ("<h1>The Lifetime Supply Calculator</h1>");
// document.write ("Favourite Snack: " + fovSnack + "<br>");
// document.write ("Current age: " + currentAge + "<br>");
// document.write ("Estimated Maximum Age: " + maxAge + "<br>");
// document.write ("Amount of snacks per day: " + perDaySnacks + "<br>");
// document.write ("You will need " + total + " chocolate chip to last you until the ripe old age of " + maxAge);



// =======================Chapter # 06 To 09 ====================

// =======================Chapter # 06 To 08 (Math expressions:Unfamiliar operators)====================


//                           Question # 01

// var a = 10;
// document.write ("<h4>Result:</h4>");
// document.write ("The value of a is: " + a + "<br>");
// document.write ("........................................" + "<br> <br> <br>");
// document.write ("The value of ++a is: " + ++a + "<br>");
// document.write ("Now the value of a is: " + a + "<br> <br> <br> <br>");

// document.write ("The value of a++ is: " + a++ + "<br>");
// document.write ("Now the value of a is: " + a + "<br> <br> <br> <br>");

// document.write ("The value of --a is: " + --a + "<br>");
// document.write ("Now the value of a is: " + a + "<br> <br> <br> <br>");

// document.write ("The value of a-- is: " + a-- + "<br>");
// document.write ("Now the value of a is: " + a + "<br> <br> <br> <br>");


//                           Question # 02

// var a = 2;
// var b = 1;

// document.write ("a is " + a + "<br>");
// document.write ("b is " + b + "<br>");

// var result = --a - --b + ++b + b--;
// document.write ("result is " + result);





// =======================Chapter # 06 To 09 ====================


// =======================Chapter # 09 (Prompts)====================


//                           Question # 03

// var name = prompt("Enter Your Name");
// alert ("Welcome to my website " + name);


//                           Question # 04

// var userNum = +prompt("Enter a Number that you want tabel", "5");

// document.write ("<h1>" + "Tabel of " + userNum + "</h1>");
// document.write (userNum + " x 1 = " + userNum*1 + "<br>");
// document.write (userNum + " x 2 = " + userNum*2 + "<br>");
// document.write (userNum + " x 3 = " + userNum*3 + "<br>");
// document.write (userNum + " x 4 = " + userNum*4 + "<br>");
// document.write (userNum + " x 5 = " + userNum*5 + "<br>");
// document.write (userNum + " x 6 = " + userNum*6 + "<br>");
// document.write (userNum + " x 7 = " + userNum*7 + "<br>");
// document.write (userNum + " x 8 = " + userNum*8 + "<br>");
// document.write (userNum + " x 9 = " + userNum*9 + "<br>");
// document.write (userNum + " x 10 = " + userNum*10);


//                           Question # 05

// var subject_1 = prompt("Enter the subject 1 name");
// var subject_2 = prompt("Enter the subject 2 name");
// var subject_3 = prompt("Enter the subject 3 name");

// var totalMarks = 100;

// var obtainedMarks_1 = +prompt("Enter subject 1 obitained marks");
// var obtainedMarks_2 = +prompt("Enter subject 2 obitained marks");
// var obtainedMarks_3 = +prompt("Enter subject 3 obitained marks");

// var subject_1_Percentage = obtainedMarks_1 / totalMarks * 100;
// var subject_2_Percentage = obtainedMarks_2 / totalMarks * 100;
// var subject_3_Percentage = obtainedMarks_3 / totalMarks * 100;

// var allSubTotalMarks = 300;
// var allSub_Obt_MarksTotal = obtainedMarks_1 + obtainedMarks_2 + obtainedMarks_3;
// var allSub_Total_Percentage = allSub_Obt_MarksTotal / allSubTotalMarks * 100;

// document.write ("<table>" 
//                         + "<tr>" 
//                             + "<th>" + "Subject" + "</th>" 
//                             + "<th>" + "Total Marks" + "</th>" 
//                             + "<th>" + "Obtained Marks" + "</th>" 
//                             + "<th>" + "Percentage" + "</th>" 
//                         + "</tr>" 
//                         + "<tr>" 
//                             + "<td>" + subject_1 + "</td>" 
//                             + "<td>" + totalMarks + "</td>" 
//                             + "<td>" + obtainedMarks_1 + "</td>" 
//                             + "<td>" + subject_1_Percentage + "%" + "</td>" 
//                         + "</tr>"
//                         + "<tr>" 
//                             + "<td>" + subject_2 + "</td>" 
//                             + "<td>" + totalMarks + "</td>" 
//                             + "<td>" + obtainedMarks_2 + "</td>" 
//                             + "<td>" + subject_2_Percentage + "%" + "</td>" 
//                         + "</tr>"
//                         + "<tr>" 
//                             + "<td>" + subject_3 + "</td>" 
//                             + "<td>" + totalMarks + "</td>" 
//                             + "<td>" + obtainedMarks_3 + "</td>" 
//                             + "<td>" + subject_3_Percentage + "%" + "</td>" 
//                         + "</tr>"
//                         + "<tr>" 
//                             + "<th>" + "Grand Total" + "</th>" 
//                             + "<td>" + allSubTotalMarks + "</td>" 
//                             + "<td>" + allSub_Obt_MarksTotal + "</td>" 
//                             + "<td>" + allSub_Total_Percentage + "%" + "</td>" 
//                         + "</tr>"
//                 + "</table>"