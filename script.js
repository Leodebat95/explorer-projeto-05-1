// variables
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let timerTimeout


const buttonPlay = document.querySelector('.play')
const playColor = document.querySelector('.play-path')

const buttonStop = document.querySelector('.stop')
const stopColor = document.querySelector('.stop-path')

const buttonPlusFive = document.querySelector('.plus-five')
const plusColor = document.querySelector('.plus-path')

const buttonMinusFive = document.querySelector('.minus-five')
const minusColor = document.querySelector('.minus-path')


const forest = document.querySelector('.forest')
const forestColor = document.querySelector('#button-forest-color')
const forestPathColor = document.querySelector('.forest svg #button-place-color')
const audioForest = new Audio('assets/Floresta.wav')

const rainy = document.querySelector('.rainy')
const rainyColor = document.querySelector('#button-rainy-color')
const rainyPathColor = document.querySelector('.rainy svg #button-place-color')
const audioRainy = new Audio('assets/Chuva.wav')

const coffee = document.querySelector('.coffee')
const coffeeColor = document.querySelector('#button-coffee-color')
const coffeePathColor = document.querySelector('.coffee svg #button-place-color')
const audioCoffee = new Audio('assets/Cafeteria.wav')

const fireplace = document.querySelector('.fireplace')
const fireplaceColor = document.querySelector('#button-fireplace-color')
const fireplacePathColor = document.querySelector('.fireplace svg #button-place-color')
const audioFireplace = new Audio('assets/Lareira.wav')



// functions
function play() {
  playColor.classList.add('button-active')
  stopColor.classList.remove('button-active')
  countdown()
}

function stop() {
  playColor.classList.remove('button-active')
  stopColor.classList.add('button-active')
  stopTimer()
}

function resetTimer() {
  minutesDisplay.textContent = String('00')
  secondsDisplay.textContent = String('00')

  playColor.classList.remove('button-active')
  stopColor.classList.remove('button-active')
}

function plusFive() {
  plusColor.classList.add('button-active')

  setInterval(function() {
    plusColor.classList.remove('button-active')
  }, 500)
  
  let minutes = Number(minutesDisplay.textContent)
  minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
}

function minusFive() {
  minusColor.classList.add('button-active')

  setInterval(function() {
    minusColor.classList.remove('button-active')
  }, 500)

  let minutes = Number(minutesDisplay.textContent)
  minutes = minutes <= 4 ? resetTimer() : (minutesDisplay.textContent = String(minutes - 5).padStart(2, "0"))
}

function countdown() {
  timerTimeout = setInterval(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds == 0
    
    if(isFinished) {
      stopTimer()
      resetTimer()    
      return
    }

    if(seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(--minutes).padStart(2, '0')
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
  }, 1000)
}

function stopTimer() {
  clearInterval(timerTimeout)
}

/* setInterval() --- o ciclo fica em loop até que algo mande parar
   setTimeout() --- o ciclo só faz 1 vez; pra fazer mais, tem que transformar a função em recursiva (ela se auto-chamando);
                    pra virar recursiva --- pôr ela se chamando no fim da declaração;
                    ex: countdown()
   clearInterval() --- usada pra parar o tempo de "setInterval()"
   clearTimeout() --- impede que "setTimeout()" execute
*/

function forestActive() {
  audioForest.loop = true

  if(audioForest.paused) {

    audioForest.play()
    audioRainy.pause()
    audioCoffee.pause()
    audioFireplace.pause()

    forestColor.classList.add('forest-color-active')
    rainyColor.classList.remove('rainy-color-active')
    coffeeColor.classList.remove('coffee-color-active')
    fireplaceColor.classList.remove('fireplace-color-active')

    forestPathColor.classList.add('button-place-color-active')
    rainyPathColor.classList.remove('button-place-color-active')
    coffeePathColor.classList.remove('button-place-color-active')
    fireplacePathColor.classList.remove('button-place-color-active')
  }
  
  else if(audioForest.played) {

    audioForest.pause()

    forestColor.classList.remove('forest-color-active')
    rainyColor.classList.remove('rainy-color-active')
    coffeeColor.classList.remove('coffee-color-active')
    fireplaceColor.classList.remove('fireplace-color-active')
    
    forestPathColor.classList.remove('button-place-color-active')
    rainyPathColor.classList.remove('button-place-color-active')
    coffeePathColor.classList.remove('button-place-color-active')
    fireplacePathColor.classList.remove('button-place-color-active')
  }
}

function rainyActive() {
  audioRainy.loop = true

  if(audioRainy.paused) {

    audioRainy.play()
    audioForest.pause()
    audioCoffee.pause()
    audioFireplace.pause()
   
    rainyColor.classList.add('rainy-color-active')
    forestColor.classList.remove('forest-color-active')
    coffeeColor.classList.remove('coffee-color-active')
    fireplaceColor.classList.remove('fireplace-color-active')

    rainyPathColor.classList.add('button-place-color-active')
    forestPathColor.classList.remove('button-place-color-active')
    coffeePathColor.classList.remove('button-place-color-active')
    fireplacePathColor.classList.remove('button-place-color-active')
  }

  else if(audioRainy.played) {
    
    audioRainy.pause()
   
    rainyColor.classList.remove('rainy-color-active')
    forestColor.classList.remove('forest-color-active')
    coffeeColor.classList.remove('coffee-color-active')
    fireplaceColor.classList.remove('fireplace-color-active')

    rainyPathColor.classList.remove('button-place-color-active')
    forestPathColor.classList.remove('button-place-color-active')
    coffeePathColor.classList.remove('button-place-color-active')
    fireplacePathColor.classList.remove('button-place-color-active')
  }
}

function coffeeActive() {
  audioCoffee.loop = true
  
  if(audioCoffee.paused) {
     
    audioCoffee.play()
    audioForest.pause()
    audioRainy.pause()
    audioFireplace.pause()

    coffeeColor.classList.add('coffee-color-active')
    forestColor.classList.remove('forest-color-active')
    rainyColor.classList.remove('rainy-color-active')
    fireplaceColor.classList.remove('fireplace-color-active')

    coffeePathColor.classList.add('button-place-color-active')
    forestPathColor.classList.remove('button-place-color-active')
    rainyPathColor.classList.remove('button-place-color-active')
    fireplacePathColor.classList.remove('button-place-color-active')
  }

  else if(audioCoffee.played) {
     
    audioCoffee.pause()

    coffeeColor.classList.remove('coffee-color-active')
    forestColor.classList.remove('forest-color-active')
    rainyColor.classList.remove('rainy-color-active')
    fireplaceColor.classList.remove('fireplace-color-active')

    coffeePathColor.classList.remove('button-place-color-active')
    forestPathColor.classList.remove('button-place-color-active')
    rainyPathColor.classList.remove('button-place-color-active')
    fireplacePathColor.classList.remove('button-place-color-active')
  }
}

function fireplaceActive() {
  audioFireplace.loop = true
  
  if(audioFireplace.paused) {
    
    audioFireplace.play()
    audioForest.pause()
    audioRainy.pause()
    audioCoffee.pause()
    
    fireplaceColor.classList.add('fireplace-color-active')
    forestColor.classList.remove('forest-color-active')
    rainyColor.classList.remove('rainy-color-active')
    coffeeColor.classList.remove('coffee-color-active')
  
    fireplacePathColor.classList.add('button-place-color-active')
    forestPathColor.classList.remove('button-place-color-active')
    rainyPathColor.classList.remove('button-place-color-active')
    coffeePathColor.classList.remove('button-place-color-active')  
  }

  else if(audioFireplace.played) {
    
    audioFireplace.pause()
    
    fireplaceColor.classList.remove('fireplace-color-active')
    forestColor.classList.remove('forest-color-active')
    rainyColor.classList.remove('rainy-color-active')
    coffeeColor.classList.remove('coffee-color-active')
  
    fireplacePathColor.classList.remove('button-place-color-active')
    forestPathColor.classList.remove('button-place-color-active')
    rainyPathColor.classList.remove('button-place-color-active')
    coffeePathColor.classList.remove('button-place-color-active')  
  }
}

/* .played --- Property booleano que identifica se o estado do audio/video está tocando (true - pausado é false)
   .paused --- Property booleano que identifica se o estado do audio/video está pausado (true - tocando é false)
   .play --- Method que dá comando ao audio/video de tocar
   .pause --- Method que dá comando ao audio/video de pausar
*/



// events - timer
buttonPlay.addEventListener('click', function() {
  play()
})

buttonStop.addEventListener('click', function() {
  stop()
})

buttonStop.addEventListener('dblclick', function() {
  resetTimer()
})

buttonPlusFive.addEventListener('click', function() {
  plusFive()
})

buttonMinusFive.addEventListener('click', function() {
  minusFive()
})



// events - place buttons
forest.addEventListener('click', function() {
  forestActive()
})

rainy.addEventListener('click', function() {
  rainyActive()
})

coffee.addEventListener('click', function() {
  coffeeActive()
})

fireplace.addEventListener('click', function() {
  fireplaceActive()
})
