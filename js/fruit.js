alert("welcome to the Fuit Machine")

document.getElementById("r1").addEventListener('click',spin)

function spin(){
    alert("you are spinning the weels")
    spinReel('b')
    spinReel('r2')
    spinReel('r3')
}

function spinReel(reel){
    
    let i = Math.floor(Math.random()*3)
    
    if(i == 0){
        document.getElementById(reel).src = "images/pineappple.jpg"
    }
    if(i == 1){
        document.getElementById(reel).src = "images/apple.jpg"
    }
    if(i == 2){
        document.getElementById(reel).src = "images/strawberry.jpg"
    }
}