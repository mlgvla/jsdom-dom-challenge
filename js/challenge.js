let intervalID = setInterval(incrementCounter, 1000)

let counter = document.getElementById("counter")
let pauseButton = document.getElementById("pause")
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let heart = document.getElementById('heart');
let paused = false //to start with
let likeTracker = {} //object to hold key-value pairs
let ulLikes = document.querySelector("ul.likes")
let commentForm = document.getElementById("comment-form")
let commentList = document.getElementById("list")
let commentInput = document.getElementById("comment-input")

pauseButton.addEventListener("click", togglePause)
plus.addEventListener("click", incrementCounter)
minus.addEventListener("click", decrementCounter)
heart.addEventListener("click", addLike)
commentForm.addEventListener("submit", addComment)

function incrementCounter(){
    counter.innerText = parseInt(counter.innerText, 10) + 1   
}

function decrementCounter(){
    counter.innerText = parseInt(counter.innerText, 10) - 1
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

function addLike(){
    // capture what's in the counter
    // check to see if it already exists and grab current value
    // or create key and set it to 0
    // increment the value by 1

    let count = counter.innerText
    likeTracker[count] = likeTracker[count] || 0 
    likeTracker[count] += 1
    listLikes()
}

function listLikes() {
    ulLikes.innerHTML = "" // start from scratch

    for (const key in likeTracker) {
        const li = document.createElement("li")
        li.innerHTML = `The number ${key} has been liked ${likeTracker[key]} times.`
        ulLikes.appendChild(li)
    }
}

function addComment(e){
    e.preventDefault()
    const comment = commentInput.value
    const li = document.createElement("li")
    li.innerHTML = comment
    commentList.appendChild(li)
    e.target.reset()
}
