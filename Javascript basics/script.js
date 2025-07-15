//This is a single line comment
/* Multiline comment
alert("Hello")
alert("hi")
*/

document.write("Hello, good evening")

var fname="JayZ" //declaring and assining
console.log(fname)

let age = 22
console.log(age)
console.log(typeof(age))

let salary = 40000.5
console.log(salary)

const pi = 3.14
// pi=3.1415 //const variables cannot be reassigned

let canVote =false
console.log(canVote)

let e 
console.log(e) //undefined
console.log(typeof(e)) //undefined

let f = null
console.log(f) //null

//Reference types in JavaScript
//Arrays

const fav_colors = ['pink', 'purple', 'white']
console.log(fav_colors)
console.log(fav_colors[0])
console.log(fav_colors[1])
console.log(fav_colors[2])
console.log(fav_colors[3]) //undefined
console.log(fav_colors.length)

let fav_days =[]
fav_days[0] = 'Sunday'
fav_days[1] = 'Saturday'
console.log(fav_days)

//obejcts
const car = {
    name: 'BMW',
    model: 'X5',
    weight: 2000,
}
console.log(car)
console.log(car.name)
console.log(car.weight)

//Arithmetic operators

console.log(10**3) //exponent operation

let a=10
let b=10

let result
result=a/b
console.log(result)

//Assingment operators

let c =20
c/=50
console.log(c)

//comparison operators
let x = 5
console.log(x=="5") //value comparison
console.log(x!="5") //not equal to
console.log(x<5) //less than
console.log(x>=5) //greater than or equal to

//Logical operators
//OR, AND, NOT

let x1 = 6
let y1 = 3

console.log(x1<10 && y1>5)
console.log(x1==6 || y1==5)
console.log(!(x1=y1))

let temperature = 2

if (temperature > 25) {
    console.log("It's hot outside")
}
else if (temperature > 15){
    console.log("It's a warm outside")
}
else if(temperature > 10){
    console.log("It's a cold outside")
}
else{
    console.log("It's very cold outside")
}

// Loops
//for loop
//initializing , increment/decrement, exit

for (let i=0;i<=5;i++){
    console.log(i)
    
}

//Functions
//declare a fucntion -no parameters
function greet() {
    console.log("Hello User")
}

//call function
greet()


function welcome(name) {
    console.log("Hello" + name)
}

welcome("JayZ")

function add(num1, num2) {
    return num1 + num2
}

let sum = add(5,7)
console.log(sum)

//DOM
//Access the element
//Store into a variable
let head1 = document.getElementById("head")
//Use the property and modify
head1.innerText="You have been hacked!!"
 // or head1.textContent="You have been hacked!!"
// or head1.innerHTML="<h4>You have been hacked!!</h4>"

//modify style
head1.style.backgroundColor = 'rgb(89, 161, 201)'
head1.style.border ='3px solid green'
//head1.setAttribute('hidden', 'true')

//Event listeners

const handleClick = ()=>{
    document.getElementById('clickbutton').innerText = "Clicked!"
    document.getElementById('clickbutton').style.backgroundColor = 'yellow'
}
document.getElementById('clickbutton').addEventListener("click",handleClick)

document.getElementById('clickbutton').addEventListener("click",()=>console.log("Second handler"))

