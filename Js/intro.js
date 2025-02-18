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