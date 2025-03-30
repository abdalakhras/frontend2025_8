var currentIndex = 0;

var menuGrid = document.querySelectorAll('.carousel-grid')
console.log(menuGrid)

function showSlide(index){
 menuGrid.forEach(elmnts => elmnts.classList.remove('active'))
 menuGrid[index].classList.add('active')
 console.log(menuGrid)
}


function prevGrid(){
  if(currentIndex == 0){
    currentIndex = menuGrid.length - 1 
    showSlide(currentIndex)
    console.log(currentIndex)
  }

else{
    currentIndex = currentIndex -1 
    showSlide(currentIndex)
    console.log(currentIndex)
}
}

function nextGrid(){
if( currentIndex == menuGrid.length -1 ) {
    currentIndex = 0
    console.log(currentIndex)
    showSlide(currentIndex)
    
}
else{
currentIndex = currentIndex + 1
showSlide(currentIndex)
console.log(currentIndex)
}
}