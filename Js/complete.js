console.log('this is my store');
var x ='adam'; // global scope
console.log(x);
x = 1+5;
console.log(x);
let y = 123;
console.log(y + x); // local scope
const z = 5;
console.log(z);
var contactbtn = document.getElementById('contactbtn')
console.log(contactbtn)
function contact(){
    alert('this is not programmed yet')
    contactbtn.innerHTML='you clicked once'
    contactbtn.style.backgroundColor='red'
    contactbtn.style.width='400px'
}
var btn1 = document.getElementById('btn1')
function btn2(){
    alert('also this btn not programmed yet')
    btn1.innerHTML=("you already clicked")
    btn1.style.width=('300px')
    btn1.style.color=('red')
}
function changeTheme(color){
    console.log(color);
    document.body.style.backgroundColor=color
    var elements = document.querySelectorAll('.hh,.hero,.container')
    var container = document.getElementById('cont1')
    console.log(elements)
    if(color=='black'){
        for(i=0; i< elements.length;i++){
            elements[i].style.color='white'
            elements[i].style.border='white solid 5px'
            container.style.backgroundColor= 'yellow'
        }
    }
    else{
        for(i=0; i< elements.length;i++){
        elements[i].style.color='blue'
        elements[i].style.border='blue solid 5px'
        container.style.backgroundColor= 'green'
        }

    }

}
function klik(){
    var klikk = document.getElementById('klikk')
    alert('this is an alert not to leave this page')
}