// "use stric
// function makeSmall(){
//     var image = document.getElementById("car");
//     console.log(image);
//     image.className = "small-car"

// }

// function zoomCar(){
//     var image = document.getElementById("car");
//     image.className += "zoom-car"
// }


//  create Elementing or text Node

// var newElement = document.createElement("h1");
// var createNode = document.createTextNode("this is a tex");
// // console.log(createNode);
// newElement.appendChild(createNode)
// console.log(newElement);
// var target = document.getElementById("test");
// target.insertAdjacentElement('beforebegin', newElement)


// var target = document.getElementById("test");
// target.style.backgroundColor = "aqua";
// var newElement = "<h1>this is a heading</h1>";
// target.insertAdjacentText("afterbegin",newElement)

// var newElement = document.createElement('li');
// var newText = document.createTextNode("hello fruit");
// newElement.appendChild("newText");

// var target = document.getElementById("test");
// console.log(target)



//       Contructor Fucntion
//  function Car (name,model,price){
//     this.name = name;
//     this.model = model;
//     this.price = price;

//  }
// let Cars =[
//     new Car ('corolla',2018,2800000),
//     new Car ('cultus','2008',555000)

// ]
// console.log(Cars[0].name)

//     Constructor Function


// function Student(firstName,LastName)  {
//  this.firstName = firstName;
//  this.LastName = LastName ;
//  this.getFullName =  () => {
//   return `${this.firstName} ${this.LastName}`
//  }
// }
// let student = new Student("awais",'ahmed');
// console.log(student.getFullName());



//        Checking Prototypes using constructor function

// function Student(firstName,LastName)  {
//     this.firstName = firstName;
//     this.LastName = LastName ;
//     Student.prototype.getFullName =  () => {
//      return `${this.firstName} ${this.LastName}`
//     }
//    }
//    let student = new Student("awais",'ahmed');
//    console.log(student);
// for (var key in student){
//     console.log(student[key])
// }

//  console.log(Object.entries(student)[1].slice())
//  let arr =Object.entries(student)[0].firstName.slice();
//  console.log(arr)


// let dropDown = document.getElementById('drop-down');
// let gender = document.getElementsByName('gender');
// submit = ()=>{
//     // console.log(dropDown.value)
//     for (var i = 0; i < gender.length; i++){
//         if(gender[i].checked){
//             console.log(gender[i].value)
//         }
//     }
// console.log(inputRadio)


// let file  = document.getElementById('file');
// let image = document.getElementById('image')
// fileSubmit =() => {
//         image.src = URL.createObjectURL(file.files[0]);
//     // console.log(URL.createObjectURL(file.files[0]))
//     }

// function checkRadioButtons() {
//     var radioButtons = document.getElementsByName('option');
//     var isChecked = false;

//     for (var i = 0; i < radioButtons.length; i++) {
//       if (radioButtons[i].checked) {
//         isChecked = true;
//         break;
//       }
//     }

//     var mouseClickEvent = function (event) {
//       event.preventDefault();
//       event.stopPropagation();
//     };

//     if (!isChecked) {
//       document.addEventListener('click', mouseClickEvent);
//     } else {
//       document.removeEventListener('click', mouseClickEvent);
//     }
//   }


// call back funtion

// setTimeout(()=>{
//   let obj = {
//     name : 'hassam',
//     email : 'hassamahmed03@gmail.com',
//   }
// abc(obj)
// },3000)
// // console.log('world')
// abc = (obj) =>{
// console.log(obj)
// }
// console.log('hello')

//callback funtion Example

// sayHello = () =>{
//     console.log('hello')
// }
// add = (num1,num2,callback)=>{
// console.log(num1 + num2)
// callback()
// }
// let a =10;
// let b = 20;
// add(a,b,sayHello)



// foo = (callback) =>{
//     // console.log(callback)
//     setTimeout(()=>{
//         let obj = {
//                 name : 'hassam',
//                 email : 'hassamahmed03@gmail.com',
//               }
//     callback(obj)
//     },3000)
// }
// abc = (hello)=>{
//     console.log(hello)
// }
// foo(abc)

// abc = () => {
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             let obj = {
//                 name: 'hassam',
//                 email: 'hassamahmed03@gmail.com',
//             }
//             resolve(obj)
//         }, 3000)
//     })

//     }
// // console.log(obj)
// abc()
// .then()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())

// .then(resolve =>{
//     console.log(resolve,'agaya dataaa')
// })
// .catch(reject =>{
//     console.log(reject,'nahi aya data')
// } )

// const data =['hassam'];
// console.log(data)
// data.push('ahmed');
// console.log(data)

// let firstName = 'hassam'
// let lastName = 'ahmed';
// let fullName = `${firstName} ${lastName}`
// console.log(fullName)


// rest operrator
// abc = (a='provided',...all)=>{
// console.log(a,all)
// }
// abc('hassam','ahmed','03456412160','hassaahned03@gmail.com')


// Spread Operator

// let arr = [1, 2, 3, 4, 5]

// let arr1 = [6, 7, 8, 9, 0]
//  let merge = [...arr,...arr1];
//  console.log(merge)


// let user = {
//     firstName :'hassam',
//     lastName : 'ahmed'
// }
// let student = {
//     email: 'hassamahmed03@gmail.com'
// }

// let merge = {...user,...student};
// console.log( merge)

// Shallow Copy & Deeep Copy

// let obj = { name: 'hassam', detail: { school: 'saylani' } };
// let obj1 = { ...obj, detail: { ...obj.detail } };
// obj1.detail.school = 'smit'
// console.log(obj)
// console.log(obj1)


// Destructring
// object destructuring

// let obj = {
//     name: 'hassam',
//     lastName: 'ahmed',
//     email: 'hassam@03',
//     details: {
//         school: 'smit',
//     }
// }
// let { lastName, email, name, details } = obj;
// let { school } = details;
// console.log(obj)

// Array Destructuring

// let arr = ['hassam', 'ahmed', 'saylani'];
// let [a,b,c] = arr;
// console.log(a,c,b)

// let arr = ['arich',4433,'smit',true];

// for(let i =0; i <arr.length;i++){
//     console.log(arr[i])
// }
// arr.forEach((v,i)=>{
// console.log(v,i)
// })
// map return new arrayy

// let result =  arr.some((v,i)=>{
//     console.log(v,i)
//     // return `saylani ${v}`
//     return  v === 'hello'
// })
// console.log(result)


// let arr = [1,2,3,4,5,52,1,1,331,4,25,35,33,53,35]
// console.log(arr.sort())
// let arr = ['hassam',4433,'smit',true];
// let result = arr.map((v)=>{
// // console.log(v)
// return `saylani${v}`
// })
// console.log(result)
// let result = arr.filter((v)=>{
// return  v === 'hass'
// })
// console.log(result)

// 
// abc =()=>{
//     console.log('hello')
// }
// abc()

// let foo = a=> a + 100;
// console.log(foo(120))


// let obj = {
//     name: 'hassam',
//     getName : function() {
//         console.log(this)
//     }
// }
// obj.getName()


// class Student {
//     constructor(name,email){
//         this.name = name;   
//         this.email = email;
//     }
//     getName(){
//         return this.email
//     }
// }

// let student = new Student("hassam",'hassamahmed03@')
// console.log(student.getName())

// let fullName ='hassa'
// let abc = fullName && ' provided';
// console.log(abc)

// let welcome = name => `hello ${name} too young age`;
// console.log(welcome('ghous'))
// console.log(welcome('hassam'))

// javaScript Closuress

// outerunction =()=>{
//     let school = 'saylani'
//     innerFuntion =()=>{
//         console.log(school)
//     }
//     innerFuntion()
// }
// outerunction()

// Recursion

// let count = 0;
// loop= ()=>{
// console.log(count)
// if(count < 10){
//     count++
//     loop()
// }

// }
// loop()

// Factory Function

// function car(name,model){
// return {
//     name:name,
//     model:model,
// }
// }
// console.log(car('liana',2019))


// rest operation 

// let sum = total =>  total + 10;
// console.log(sum(10))

// sum =(name,...rest)=>{
//  console.log(name , ...rest)
// }
// sum('hassam',20,10,30)



// function sum (name,...rest){
// let total = 0;
// for(let i in rest){
// total += rest[i]

// }
// document.write(`${name} total number is ${total} <br>`)
// }
// sum('Hassam Ahmed',20,30,40)
// sum('Hello world',20,40)
// // sum('Hassam Ahmed',ahmed)

// Spread Operator


// let arr = [10,20,30]
// let arr2 = [30,40,50]
// console.log([5,...arr,...arr2,5])

// function sum (name,...rest){
// let total = 0;
// for(let i in rest){
// total += rest[i]

// }
// document.write(`${name} total number is ${total} <br>`)
// }
// let arr = [20,50,40]
// sum('Hassam Ahmed',...arr)
// sum('Hello world',20,40)
// sum('Hassam Ahmed',ahmed)

// let arr = [10,20,30,40]
// let arr2 = [...arr];
// arr.push(50)
// console.log(arr2)
// console.log(arr)

// merging objects using

// let obj1 = {
//     name : 'hassam',
// }

// let obj2 = {
//     age : 26,
// }

// let obj3 = {fname:'murad',...obj1,...obj2,phoneNo:'03456412160'}
// console.log(obj3)

// Object Literals

// let n = 'student'
// let obj = {
//     [n + 'name']: 'hassam Ahmed',
//     course: 'Web & App',
//     detail(){
//         retrun `{${this.studentname} is enrolled in ${this.course}}`
//     }
// }
// console.log(obj.detail())


// Destructing Array 

// let user = ['hassam ahmed',,'karachi',['manager',250000]]
// let [name,...res, [designation,salary]] = user
// console.log(name)
// console.log(age)
// console.log(city)
// console.log(salary)
// console.log(designation)
// console.log(user)

// user =([name,age,city])=>{

//     console.log(name)
//     console.log(age)

// }
// user(['hassam',22,'karachi'])

// Object Destructuring

// let users ={
//     name:'hassam',
//     age:22,
//     school:'white rose grammar school'
// }

// let{name: n,age,school} = users
// console.log(n)

// JS strict mode

// a =10 ;
// console.log(a)  found error

// let a =10 ;
// console.log(a)

//  JS Promises


// let complete = false;
// let prom = new Promise((resolve, reject) => {
//     if(complete){
//         resolve('succesfull')
//     }
//     else{
//         reject('unsuccesfull')
//     }
// })
//  console.log(prom)

//  promise all section

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('the first promise is resolved')
//         resolve(10)
//     }, 1000)
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('the second promise is failed')
//         reject('failed')
//     }, 1000)
// })
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('the third promise is resolved')
//         resolve(30)
//     }, 1000)
// })
// let total = 0;
// Promise.all([p1, p2, p3]).then((result) => {
//   for(var i in result){
//     total += result[i]
//     console.log('total -->' ,total)
//   }
//  console.log(`result : ${result} total sum of promises is ${total}`)
// }).catch((err)=>{
//    console.log(`error : ${err}`)
// })

// let test = async () =>  'hello world'

// // console.log(test())
// test().then((res) => {
//     console.log(res)
// })

// test = async () => {
//     console.log('2: message')
//     await console.log('3: message')
//     console.log('4: message')

// }
// console.log('1: message')
// test()
// console.log('5: message')

// let test = ()=>{ fetch('https://jsonplaceholder.typicode.com/users')
//     let response =then(response => response.json())
//     let the (json => console.log(json))
//     .catch(err => console.log('err-->',err) )}

// let ages =  [10,14,23,16,19,18,18,22,25,10]
// let b = arr.filter(checkAdult)
// document.write(b + '<br>')
// checkAdult = (age)=>{
// return age >= 18;
// }
// checkAdult()
// let filtered = ages.filter(value=>value === 18 || value === 10 );
// console.log(filtered.sort())
// document.write(filtered.slice(1))
// let arrNumber =  [3,10,14,23,16,19,18,18,88,1,22,25,10];

// let maxNumber = (arr) =>{
    //     return arr.reduce((pre,curr) =>{
        //         return pre < curr?pre:curr
        //     })
        // }
        // console.log(maxNumber(arrNumber))  
        
// let arrNumber =  [3,10,14,23,16,19,56,18,18,88,1,22,25,10];
// let largestValue = (arr)=>{
//  firstLargestValue =  Math.max(...arr)
//  index = arr.indexOf(firstLargestValue)
// arr.splice(index,1)
// // console.log('index-->',index)
// secondLargestValue =  Math.max(...arr)

// return(secondLargestValue)
// }
// console.log(largestValue(arrNumber))



// const numbers = [5, 2, 9, 1, 7];

// numbers.sort((a, b) => b - a);
// const secondLargest = numbers[1];
// console.log(secondLargest)

// let arrNumber =  [3,10,14,23,16,19,56,18,18,88,1,22,25,10];
//  let largestValue = (arr)=>{
//    firstLargestValue = Math.max(...arr)
//    index = arr.indexOf(firstLargestValue)
//    console.log('index-->',index)
//   deleted = arr.splice(index,1);
//   console.log('deleted-->',deleted)
//   secondLargestValue = Math.max(...arr)

//    return(secondLargestValue)
//  }
//  console.log(largestValue(arrNumber))


// diff between find and filter

// const employeeArr =[
//     {name:'ali',age:23},
//     {name:'hassam',age:17},
//     {name:'hassam',age:25},
//     {name:'hassam',age:13},
//     {name:'hassam',age:18},
//     {name:'hassam',age:20},
//     {name:'hassam',age:19},
//     {name:'hassam',age:15},
    
// ]
// let filteredItem = employeeArr.filter((item)=>{
//     return item.age >= 20
// })
// console.log(filteredItem)


// const empArr =[
//     {name:'ali',age:25},
//     {name:'hassam',age:17},
//     {name:'bhundu',age:25},
//     {name:'hassam',age:13},
//     {name:'hassam',age:18},
//     {name:'hassam',age:20},
//     {name:'hassam',age:19},
//     {name:'hassam',age:15},
    
// ]
// let findItem = empArr.find((item)=>{
//     return item.age >= 20
// })
// console.log(findItem)

// finding missing Number

// let arrNum = [1,2,3,4,5,6,9,10]
// let missArray =[]
// let missingValue = (arr)=>{
//     let minValue = Math.min(...arr)
//     let maxValue = Math.max(...arr)
// console.log('minValue-->',minValue,'maxValue-->',maxValue,'arr-->',arr)
// for(i = minValue;i < maxValue;i++){
//       if(arr.indexOf(i)<0){
//         missArray.push(i)
//           console.log('i-->',i)
//       }
// }
// return(missArray)
// }
// console.log(missingValue(arrNum))

// let userNumber =  prompt('enter a number to check ')
// if(userNumber/2 ===0){
//  alert('its a even')
// }
// console.log(userNumber.value)


// odd or even
// function checkOddOrEven(number) {
//     if (number % 2 === 0) {
//        alert('its an even');
//     } else {
//         alert('its an odd ');
//     }
//   }
//   checkOddOrEven(prompt('input some number'))
  

//   che =(number)=>{
//     if(number %2===0){
//         alert('even')
//     }
//     else{
//         alert('odd')
//     }
//   }

//   che(prompt('che'))
  
// let arrNum = [1,2,3,4,5,6,9,10]
// let sum = 0;
// for(let i =0;i < arrNum.length; i++){
//     sum += arrNum[i]
// }
// console.log(sum)

// GrandTotal=()=>{
//     let sum = 0;
//     return let ilt =  for(let i =0;i < arrNum.length; i++){
//         sum += arrNum[i]
//     }

// }
// GrandTotal()

// let sumNumber = (arr)=>{
// return arr.reduce((prev,curr)=>{
//   return prev + curr
// })
// }
// console.log(sumNumber(arrNum))

// let userNumber = prompt('enter a number');
// if(userNumber ==1){
//     alert(`${userNumber} is not a prime neither composite`)
// }
// else if (userNumber > 1){
//     alert(`prime number of  ${userNumber} is not possible `)
// }
// let userInput = prompt('enter  a word to chevk its  a vovel or not')
// userInput =userInput.toLocaleLowerCase()
// if(userInput === 'a' ||userInput === 'e' ||userInput === 'i' ||userInput === 'o' ||userInput === 'u'){
//     alert(`${userInput} its a vovel`)
// }
// else{
//     alert(`${userInput} its not a vovel`)
// }

// Palindrome 

// let userInput =  prompt('enter a word to check its palindrom or  not')
// let palindrom = (userInput)=>{
// let result = userInput.split('').reverse().join('');
// // userInput =userInput.toLocaleLowerCase()
// if(userInput ===result){
//     alert(`${userInput} its a palindrome word`)
// }
// else{
//     alert(`${userInput} its not a palindrome word`)
// }
// }
// console.log(palindrom(prompt('enter a word to check its palindrom or  not')))

// swapping variable values usinng any third variable

// let a = 10;
// let b = 20;
// [a,b] = [b,a]
// console.log('a-->',a,'b-->',b)
// console.log(`value of a a ${a} & value of b is ${b}`)

// merging and sorting the array
//  let arr = [1,4,5,8]
//  let arr1 = [2,10,9,7]
//  let merge = [...arr,...arr1]
//  let sort = merge.sort((a,b)=>{
//   return a-b
//  })
// //  let sort = merge.sort()
//  console.log(sort)
