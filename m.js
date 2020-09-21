const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click",deleteCheck)

function addTodo(event){
    event.preventDefault();
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo") 


    const newTodo = document.createElement("li")
    newTodo.innerHTML = todoInput.value
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)


    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete")
    todoDiv.appendChild(completedButton)


    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash")
    todoDiv.appendChild(trashButton)
    todoList.appendChild(todoDiv)
    todoInput.value = "";
}    

function deleteCheck(e){
    const item = e.target
    if(item.classList[0] === "trash"){
        const todo = item.parentElement;
        todo.remove();
       
    }
    if(item.classList[0] === "complete"){
        const todo = item.parentElement
        todo.classList.toggle("completed");
    }
}






const oneBtn = document.getElementById("one")
const twoBtn = document.getElementById("two")
const threeBtn = document.getElementById("three")
const fourBtn = document.getElementById("four")
const fiveBtn = document.getElementById("five")
const sixBtn = document.getElementById("six")
const sevenBtn = document.getElementById("seven")
const eightBtn = document.getElementById("eight")
const nineBtn = document.getElementById("nine")
const zeroBtn = document.getElementById("zero")

const dotBtn = document.getElementById("dot")
const clearBtn = document.getElementById("clear")
const backspaceBtn = document.getElementById("backspace")
const displayValElement = document.getElementById("display-val")

const numBtn = document.getElementsByClassName("calc-btn-num")
const operatorBtn = document.getElementsByClassName("calc-btn-operator")

let displayVal = "0"
let pendingVal;
let sumStringArray=[]


function updateDisplayVal(e){
    let btnText = e.target.innerText;

    if(displayVal === "0")
        displayVal = "";
    displayVal += btnText
    displayValElement.innerText = displayVal
}

function doOperator(e){
    let operator = e.target.innerText;
    
    if(operator === "+"){
        pendingVal = displayVal
        displayVal = "0"
        displayValElement.innerText = displayVal
        evalStringArray.push(pendingVal)
        evalStringArray.push("+")
    }
    if(operator === "-"){
        pendingVal = displayVal
        displayVal = "0"
        displayValElement.innerText = displayVal
        evalStringArray.push(pendingVal)
        evalStringArray.push("-")
    }
    if(operator === "x"){
        pendingVal = displayVal
        displayVal = "0"
        displayValElement.innerText = displayVal
        evalStringArray.push(pendingVal)
        evalStringArray.push("*")
    }
    if(operator === "÷"){
        pendingVal = displayVal
        displayVal = "0"
        displayValElement.innerText = displayVal
        evalStringArray.push(pendingVal)
        evalStringArray.push("/")
    }
    if(operator === "="){
        evalStringArray.push(displayVal)
        let sum = eval(sumStringArray.join(' '))
        displayVal = sum + "";
        displayValElement.innerText = displayVal;
        sumStringArray = []
    }    
}

dotBtn.onclick=()=>{
    if(!displayVal.includes("."))
    displayVal += "."
    displayValElement.innerText=displayVal
}

clearBtn.onclick = ()=> {
    displayVal = "0"
    pendingVal = undefined
    sumStringArray = []
    displayValElement.innerHTML=displayVal
}

backspaceBtn.onclick= ()=> {
    let lengthDisplay =displayVal.length;
    displayVal = displayVal.slice(0,lengthDisplay -1)
   

    if(displayVal === "")
        displayVal = "0"

 displayValElement.innerText = displayVal     
}

for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener("click", updateDisplayVal)

}

for (let i = 0; i < operatorBtn.length; i++) {
    operatorBtn[i].addEventListener("click", doOperator)

}