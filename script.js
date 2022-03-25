//console.log("Hello, world!");
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// Default values before it was randomized
var pattern0 = [5, 1, 6, 4];
var pattern = [5, 2, 6, 3, 2, 1, 6, 4];
var pattern2 = [5, 2, 6, 3, 2, 1, 6, 4, 1, 3, 5, 6];

var clueHoldTime = 333; //how long to hold each clue's light/sound

var progress = 0;
var guessCounter = 0;
var gamePlaying = false;

// Sound
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0

var difficulty = 0;






function startGame(seq){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  difficulty = seq;
  
  // Randomizing the sequences
  pattern0 = [getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6),]
  pattern = [getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6)]
  pattern2 = [getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6)]
  
  // Swapping game btns
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("startBtn2").classList.add("hidden");
  document.getElementById("startBtn3").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence(seq)
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("startBtn2").classList.remove("hidden");
  document.getElementById("startBtn3").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(seq){
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    switch(seq){
      case 0:
        console.log("play single clue: " + pattern0[i] + " in " + delay + "ms")
        setTimeout(playSingleClue,delay,pattern0[i]) // set a timeout to play that clue
        break;
      case 1:
        console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
        setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
        break;
      case 2:
        console.log("play single clue: " + pattern2[i] + " in " + delay + "ms")
        setTimeout(playSingleClue,delay,pattern2[i]) // set a timeout to play that clue
        break;
      default:
        console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
        setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    }
    
    delay += clueHoldTime 
    delay += cluePauseTime;
    
    // clueHoldTime decreases until it becomes less than 200
    if(clueHoldTime > 150){
      clueHoldTime -= (15*difficulty);
    }
  }
}

function loseGame(){
  stopGame();
  alert("You lost!!!!");
}

function winGame(){
  stopGame();
  alert("You won!!!!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  switch(difficulty){
    case 0:
      if(pattern0[guessCounter] == btn){
      //Guess was correct!
      if(guessCounter == progress){
        if(progress == pattern0.length - 1){
          //GAME OVER: WIN!
          winGame();
        }else{
          //Pattern correct. Add next segment
          progress++;
          playClueSequence(difficulty);
        }
      }else{
        //so far so good... check the next guess
        guessCounter++;
      }
      }else{
        //Guess was incorrect
        //GAME OVER: LOSE!
        loseGame();
      }
      break;
      
    case 1:
      if(pattern[guessCounter] == btn){
      //Guess was correct!
      if(guessCounter == progress){
        if(progress == pattern.length - 1){
          //GAME OVER: WIN!
          winGame();
        }else{
          //Pattern correct. Add next segment
          progress++;
          playClueSequence(difficulty);
        }
      }else{
        //so far so good... check the next guess
        guessCounter++;
      }
      }else{
        //Guess was incorrect
        //GAME OVER: LOSE!
        loseGame();
      }
      break;
    
    case 2:
      if(pattern2[guessCounter] == btn){
      //Guess was correct!
      if(guessCounter == progress){
        if(progress == pattern2.length - 1){
          //GAME OVER: WIN!
          winGame();
        }else{
          //Pattern correct. Add next segment
          progress++;
          playClueSequence(difficulty);
        }
      }else{
        //so far so good... check the next guess
        guessCounter++;
      }
      }else{
        //Guess was incorrect
        //GAME OVER: LOSE!
        loseGame();
      }
      break;
    
    default:
      if(pattern[guessCounter] == btn){
      //Guess was correct!
      if(guessCounter == progress){
        if(progress == pattern.length - 1){
          //GAME OVER: WIN!
          winGame();
        }else{
          //Pattern correct. Add next segment
          progress++;
          playClueSequence(difficulty);
        }
      }else{
        //so far so good... check the next guess
        guessCounter++;
      }
      }else{
        //Guess was incorrect
        //GAME OVER: LOSE!
        loseGame();
      }
      break;
  }
}

// Function obtained from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}







/////////////////////////////////////////////////////////////////////////////////////
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 533.6,
  6: 601.6
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
/////////////////////////////////////////////////////////////////////////////////////