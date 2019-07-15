window.addEventListener('load', init);

//Globals

//Available Levels

const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

//To chnage level

const currentLevel = levels.easy
let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Element

const wordInput = document.querySelector('#word-input')
const currentWord = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message')
const seconds = document.querySelector('#seconds')

const words = ["the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he", "was", "for", "on", "are", "as", "with", "his", "they", "I", "at", "be", "this", "have", "from", "or", "one", "had", "by", "word", "but", "not", "what", "all", "were", "we", "when", "your", "can", "said", "there", "use", "an", "each", "which", "she", "do", "how", "their", "if", "will", "up", "other", "about", "out", "many", "then", "them", "these", "so", "some", "her", "would", "make", "like", "him", "into", "time", "has", "look", "two", "more", "write", "go", "see", "number", "no", "way", "could", "people", "my", "than", "first", "water", "been", "call", "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get", "come", "made", "may", "part"];

// Initilize
function init() {
    //Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    //Load word from ARRAY
    ShowWord(words);
    //Start matching on word input
    wordInput.addEventListener('input', startMatch);
    //Call countdown every second
    setInterval(countdown, 1000)
    //Check GAme Status
    setInterval(checkStatus, 50)

}

//Start MAtch
function startMatch() {
    if (matchWord()) {
        isPlaying = true;
        time = currentLevel + 1;
        ShowWord(words)
        wordInput.value = ''
        score++
    }

    if (score == -1) {

        scoreDisplay.innerHTML = 0;
    }

    else {
        scoreDisplay.innerHTML = score

    }
}


function matchWord() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }

}


//Pick and Show random word
function ShowWord(words) {
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //Output random word
    currentWord.innerHTML = words[randIndex];
}

//CountdownTimer
function countdown() {
    //MAke sure timer is not run out
    if (time > 0) {
        //Decrement
        time--;
    } else if (time === 0) {
        //Game is over
        isPlaying = false;
    }
    //ShowTime
    timeDisplay.innerHTML = time;
}

//Check game status

function checkStatus() {
    if (!isPlaying && time == 0) {
        message.innerHTML = 'Game Over!!!'
        score = -1
    }
}



