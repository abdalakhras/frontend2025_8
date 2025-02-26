// const button = document.querySelector('button')
width = 0;
var x;
var elem = document.getElementById('myBar');

function move(){
    x = setInterval(prog , 10);
}
function prog(){

    if(width==100){
        clearInterval(x);

    }
    else{
        width++;
        elem.style.width= width + '%';
        
        // elem.style.backgroundColor = 'red'

    }
}