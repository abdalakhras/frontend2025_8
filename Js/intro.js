var klika = document.getElementById('klika1')
//console.log(klika)

function klik(){
    console.log(1,2,3,4,5)
    alert('this is an alert from clicking the button')
    klika.style.backgroundColor=('red')
    klika.style.width=('300px')
    
}

var elemnts = document.querySelectorAll('.form-check-label,.form-label,.form-text')

function changeTheme(xyz){
//console.log(xyz)
document.body.style.backgroundColor=xyz

//console.log(elemnts)
if( xyz=='black'){
    for(let i = 0; i< elemnts.length;i++ ){
        //console.log(elemnts[i])
        elemnts[i].style.color='white'
    }
}
else{
    for( let i = 0; i< elemnts.length;i++){
        elemnts[i].style.color='blue'
     }
    }
}