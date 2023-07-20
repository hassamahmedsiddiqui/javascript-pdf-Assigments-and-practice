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

// let arr = ['hassam',4433,'smit',true];

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

