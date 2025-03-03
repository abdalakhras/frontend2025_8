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

