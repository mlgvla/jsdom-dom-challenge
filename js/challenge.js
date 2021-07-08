let intervalID = setInterval(incrementCounter, 1000)
let paused = false //to start with

let pauseButton = document.getElementById("pause")
pauseButton.addEventListener("click", togglePause)

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let heart = document.getElementById('heart');


function incrementCounter(){
    let counter = document.getElementById("counter")
    counter.innerText = parseInt(counter.innerText) + 1   
}

function togglePause(){
    paused = !paused

    if (paused) {
        clearInterval(intervalID)
        pauseButton.innerHTML = " resume "
        plus.disabled = true
        minus.disabled = true
        heart.disabled = true
    } else {
        intervalID = setInterval(incrementCounter, 1000)  
        pauseButton.innerHTML = " pause "
        plus.disabled = false
        minus.disabled = false
        heart.disabled = false
    }
    
    
}