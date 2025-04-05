//this is to make Menu Gridslider
var currentIndex = 0;

var menuGrid = document.querySelectorAll('.carousel-grid')
console.log(menuGrid)

function showSlide(indix){
 menuGrid.forEach(elmnts => 
 elmnts.classList.remove('active'))
 menuGrid[indix].classList.add('active')
 console.log(menuGrid)
}


function prevGrid(){
  if(currentIndex == 0){
    currentIndex = menuGrid.length - 1 
    showSlide(currentIndex)
    console.log(currentIndex)
    changeNumcolor(currentIndex)
  }

else{
    currentIndex = currentIndex -1 
    showSlide(currentIndex)
    console.log(currentIndex)
    changeNumcolor(currentIndex)
}
}

function nextGrid(){
if( currentIndex == menuGrid.length -1 ) {
    currentIndex = 0
    console.log(currentIndex)
    showSlide(currentIndex)
    changeNumcolor(currentIndex)
}
else{
currentIndex = currentIndex + 1
showSlide(currentIndex)
console.log(currentIndex)
changeNumcolor(currentIndex)
}
}
// this part is for the numbers


var btnOne = document.getElementById("btnOne")
var btnTwo = document.getElementById("btnTwo")
var btnThre = document.getElementById("btnThre")

// btnOne.addEventListener('click', function(){
// newIndex = 0
// showSlide(newIndex)
// })

// btnTwo.addEventListener('click', function(){
// newIndex = 1
// showSlide(newIndex)
// })

//  btnThre.addEventListener('click', function(){
//   newIndex = 2
//   showSlide(newIndex)
// })

//     let numberSlider = Array.from(menuGrid) this is just to transform the nodelist o an array and was not used ib the code
// console.log(numberSlider) 

//trying alternative and more profissional way to change carousel using numbers

var elements = document.querySelectorAll('.btn-index') //returns a NodeList
console.log(elements)

// we use for each to loop through every element in the NodeList
//foreach method calls a function for each element in the NodeList can take up to three arguments: (element,index,array)
// the element is to loop through each element , and the index is to set the index (position) of the element
elements.forEach((element,index) => { 
  element.addEventListener( "click" ,function (){

  console.log('hi')

element.setAttribute ('data-index', index)  //setting (data-*) attribute and an index value to each element and 
console.log(element)
showSlide(index) // calling the function with the (index) as a parameter of the function

})

})

// this is for the background Color of the numbers
function changeNumcolor(colorx){
 elements.forEach(elemnt=> 
  elemnt.classList.remove('num-color'))
  
  elements[colorx].classList.add('num-color')
  console.log(elements)
}







// this is for the toggle button in media screen
document.getElementById("toggleButton").addEventListener('click', function(){
document.getElementById("five-btns").classList.toggle('visible')

})



// this is for the gallery grid 
var previous = document.getElementById('previous')
var next = document.getElementById('next')
 let galleryIndx = 0

var galleryGrid = document.querySelectorAll('.gallery')
console.log(galleryGrid)

function showGallery(indx){
galleryGrid.forEach(elem => {
  elem.classList.remove('show')
  galleryGrid[indx].classList.add('show')

  })
}

function prevGallery(){
  if(galleryIndx == 0 ){
    galleryIndx = galleryGrid.length - 1
    showGallery(galleryIndx)
    console.log(galleryIndx)
    changeBkGroundClolor(galleryIndx)
  }
  else{
    galleryIndx = galleryIndx - 1
    showGallery(galleryIndx)
    console.log(galleryIndx)
    changeBkGroundClolor(galleryIndx)
  }
 
}

function nextGallery(){
if(galleryIndx == 0 || galleryIndx < galleryGrid.length-1){
  galleryIndx = galleryIndx + 1
  showGallery(galleryIndx)
  console.log(galleryIndx)
  changeBkGroundClolor(galleryIndx)
}
else{
  galleryIndx = 0
  showGallery(galleryIndx)
  console.log(galleryIndx)
  changeBkGroundClolor(galleryIndx)
}

}

// now the background of pointers in the gallery grid


var pointers = document.querySelectorAll('.dot')
console.log(pointers)

function changeBkGroundClolor(color){

pointers.forEach(elimnt => 
  elimnt.classList.remove('highLight'))
pointers[color].classList.add("highLight")
// console.log(pointers)
}
 



