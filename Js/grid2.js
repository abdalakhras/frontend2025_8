var nav = document.getElementById('nav')
//nav.innerText=('navigation bar')
    nav.style.backgroundColor='red'
    nav.style.backgroundColor='pink'

function changeTheme(color){
    console.log(color);
    document.body.style.backgroundColor = color


    let elemnts= document.querySelectorAll('#nav,#leftMenu,#main,#rightMenu,#footer')
console.log(elemnts)
if(color=='black'){
    for (let i = 0; i < elemnts.length;i++){
        elemnts[i].style.backgroundColor = 'black'
        elemnts[i].style.border= '2px white solid'
        elemnts[i].style.color='white'
    }
}
else{
    for (let i = 0; i < 4;i++){
        elemnts[i].style.backgroundColor = 'aqua'
        elemnts[i].style.border= '2px black solid'
        elemnts[i].style.color='black'
    }
    nav.style.backgroundColor='red'
}

}


