// const button = document.querySelector('button')
width = 100;
var x;
var elem = document.getElementById('myBar');

function move(){
    x = setInterval(prog , 10);
}
function prog(){

    if(width==0){
        clearInterval(x);
        console.log('finish')

    }
    else{
        width--;
        elem.style.width= width + '%';

        console.log('progress')
        // elem.style.backgroundColor = 'red'

    }
}