var btn = document.getElementById('btn')
var htag = document.getElementById('htag')
var image = document.getElementById('image')
var ptag = document.getElementById('ptag')
// function klik(){
// ptag.innerHTML= 'Willkomen'
// }
btn.addEventListener("click",myFunction)
function myFunction(){
    ptag.innerHTML="Willkomen"
    image.src = '/images/cow.png'

    let x = "3px"
console.log(parseInt(x)+2) // parseInt : transforms string into an Integer 
}

var myForm = document.getElementsByClassName("userInput")[0]
var myInput = document.getElementsByClassName('input')[0]
myForm.addEventListener("submit",function1)
function function1(e){
    e.preventDefault()
    console.log(2)
htag.innerHTML = myInput.value
myInput.value = "" //clear input field

}

var myForm2 = document.getElementById("multi")
var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")
var result = document.getElementById("result")
myForm2.addEventListener("submit",function2)
function function2(e){
e.preventDefault()
console.log(2)
result.innerHTML = (num1.value * num2.value)
num1.value = "" //clear input field
num2.value = "" //clear input field
result.style.color = "red"
result.style.textAlign = "center"


}