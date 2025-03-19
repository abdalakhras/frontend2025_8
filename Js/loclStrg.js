// alert("hello")




var body = document.getElementById('body')
var btn = document.getElementById("btn0")


var themeColor = localStorage.getItem('theme') || 'white';
// localStorage.setItem('theme',themeColor) // Ensure themeColor is stored in local storage, this is optional and it works well without it 
    console.log(themeColor) // the local storage is white and i don't know why
 body.style.backgroundColor = themeColor // this is to make sure that the backgroundColor is not changed after refresh 
 btn.innerHTML = themeColor === 'white' ? 'dark mode' : 'light mode'; //this is to make sure that innertext of the button is not changed after refresh 

function changeTheme(){

    


if(localStorage.getItem('theme') === 'white'){    
    localStorage.setItem('theme','black')
 body.style.backgroundColor= 'black'
 btn.innerHTML = 'light mode'
 age1.style.color= 'red'
}
else{
    localStorage.setItem('theme','white')
body.style.backgroundColor= 'white'
 btn.innerHTML ='dark mode'
 age1.style.color= 'green'
}
}


//body.style.backgroundColor=='white' || body.style.backgroundColor =="" this is used in the function above inside if statement insted of localStorage


// this a an addEventLisner
// var grpBtn = document.getElementById('grpBtn')
// grpBtn.addEventListener('click', changeTheme)
// function changeTheme(event){
//     console.log(event.target.textContent)
//     if(event.target.textContent == 'light mode'){ // reads the button innerText
//         document.body.style.backgroundColor= 'black'
//     }
//     else{
//         document.body.style.backgroundColor='red'
//     }
// }

var changepicture = localStorage.getItem('img') 
console.log(changepicture)
 image.src = changepicture // this is to make sure that the image is not changed after refresh
 imgbtn.innerHTML = changepicture === 'images/DOG.png' ? 'cat' : 'dog' //this is to make sure that innertext of the button is not changed after refresh 


function changeImg(position){
    var imgbtn = document.getElementById('imgbtn')
    var image = document.getElementById('image')
if(localStorage.getItem('img') == '/images/cat.png'){
  localStorage.setItem('img','images/DOG.png')
image.src = "/images/DOG.png"
imgbtn.innerHTML = 'cat'
}
else{
    localStorage.setItem('img','/images/cat.png')
    image.src = "images/cat.png"
    imgbtn.innerHTML = 'dog'
}
}

var student = {
    name: 'abed',
    age : 32,
    gender: 'male',
    major : 'Engineer',
} 
console.log(student.age)

// created keys and values inside the browser "Chrome" local storage
 localStorage.setItem('name','abed')
 localStorage.setItem('age',32)
// creat HTML tag/elemnt (h2) using JS
 var age1 = document.createElement('h2')
//  changing the innerHTML of tag/element of HTML by summon the local storage  
 age1.innerHTML= localStorage.getItem('age')
 var name1 = document.createElement('h2')
 name1.innerHTML = localStorage.getItem('name')
//  append the tag inside of the body of HTML / note that the body is a variable defined earlier
 body.appendChild(age1)
 body.appendChild(name1)
 


