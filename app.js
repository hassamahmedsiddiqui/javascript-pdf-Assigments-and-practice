//   Some practice to clearing concept then we start todo app assigmentvar 
// let main = document.getElementById("main")
// let div = document.createElement("div");
// let p = document.createElement("p");
// div.setAttribute("class","container")
// let text = document.createTextNode("Ghous Ahmed");
// p.appendChild(text);
// div.appendChild(p)
// main.appendChild(div)
// console.log(p)
// console.log(div)

                // Making todo app using ECMA 5 FEATURES                 


addTodo = () =>{
  let todo = document.getElementById("todo");
  console.log('todo.value-->',todo.value);
  
  if(todo.value.trim() === ""){
    Swal.fire(
      'Input Field is Blank',
      'Fill Some Input?',
      'Blank Input'
    )
  }else{
    let li = document.createElement("li");
    let text = document.createTextNode(todo.value);
    li.appendChild(text);
    let list = document.getElementById("list");
    list.appendChild(li);
    let delButton = document.createElement("button");
    let delText = document.createTextNode("delete");
    delButton.appendChild(delText);
    delButton.setAttribute("onclick","delTodo()")
    delButton.setAttribute('class','button3')
    console.log(delButton)
    let editButton = document.createElement("button");
    let editText = document.createTextNode("edit");
    editButton.appendChild(editText);
    editButton.setAttribute("onclick","editTodo()")
    editButton.setAttribute('class','button3')
    li.appendChild(delButton);
    li.appendChild(editButton);
    list.appendChild(li);
    todo.value = "";
  }
    console.log(list)
    console.log(text)
    console.log(li);
}
                  // MAKING TODO APP USING ECMA 6 TEMPLATE LITERAL FEATURE

// addTodo = () => {
  
//   let list = document.getElementById("list");
//   let todo = document.getElementById("todo");
//   list.innerHTML = `<li>${todo.value}     
//        <button onclick=delTodo()>Delete</button>
//        <button onclick=editTodo()>edit</button>
//        </li> `

// }


delTodo = () => {
  event.target.parentNode.remove()
}

deleteAll = () => {
  let list = document.getElementById("list");
  list.innerHTML = "";
  console.log(list)
}

editTodo = () => {
  let oldValue = event.target.parentNode.firstChild.nodeValue;
  let editValue = prompt("enter a updated Value", oldValue);
  event.target.parentNode.firstChild.nodeValue = editValue;
  console.log(editValue)
}

window.addTodo = addTodo;