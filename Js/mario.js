
function move(direction){
    var mario = document.getElementById('mario')
    var positionLeft = parseInt(window.getComputedStyle(mario).left, 10);
    var positionTop = parseInt(window.getComputedStyle(mario).top, 10);
    //let position = mario.style.left

    if(direction == 'up'){

        mario.style.top = (positionTop - 10) + 'px'
        console.log(positionTop)
        console.log(direction)
        //mario.src = "/images/GOW.png"
    }
    if(direction == 'down'){
        mario.style.top = (positionTop + 10) + 'px'
        console.log(positionTop)
        console.log(direction)
    }
    

    
    if(direction=='right'){
       
        console.log(direction)
        mario.style.left = (positionLeft + 10) + 'px'
        console.log(positionLeft)


    }
    if(direction == 'left'){
        if(positionLeft == -10){
            alert(" can't move left")
            return;
        }
        mario.style.left = (positionLeft - 10) + 'px'
        console.log(positionLeft)
        console.log(direction)
        
        


    }
}

document.addEventListener("keydown",function(event){
   
    if(event.key == "ArrowLeft"){
        console.log(event.key)
    move('left')    
    }
    if(event.key == 'ArrowRight'){
        
        move ('right')
    }


})