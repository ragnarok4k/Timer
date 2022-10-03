import sound from "./sounds.js";
import{
  btnPlay,
  btnStop,
  btnPlus,
  btnDecrease,
  secondsScreen,
  minutesScreen,
  floresta,
  chuva,
  cafeteria,
  lareira
} from "./elements.js"

let minutes;
let temporizador;

const sounds = sound()

floresta.addEventListener("click",  () => {
  sounds.forestSound()
})

chuva.addEventListener("click", () => {
  sounds.rainSound()
})

cafeteria.addEventListener("click", () => {
  sounds.coffeeShopSound()
})

lareira.addEventListener("click", () => {
  sounds.fireplaceSound()
})


function contadorDeSegundos() {
  temporizador = setTimeout(function(){
  
    let seconds = Number(secondsScreen.textContent)
     minutes = Number(minutesScreen.textContent)
    let whenFinish = minutes <= 0 && seconds <= 0

      if(whenFinish == true){
          return
      }

      if(seconds <= 0){
        seconds = 60

        minutesScreen.textContent = String(minutes - 1).padStart(2, '0')
      }

      secondsScreen.textContent = String(seconds - 1).padStart(2, '0')

      contadorDeSegundos()

  }, 1000)
}

btnPlay.addEventListener("click", function acionarTimer(){
  contadorDeSegundos()
})

btnStop.addEventListener("click", function pausarTimer() {
  clearTimeout(temporizador)
})

btnPlus.addEventListener("click", function adicionarCincoMinNoTimer() {
  if(minutesScreen.textContent >= 0) {
    let cont = Number(minutesScreen.textContent)
    minutesScreen.textContent = String(cont + 5).padStart(2, 0)
  }
})

btnDecrease.addEventListener("click", function retirarCincoMinNoTimer() {
  if(minutesScreen.textContent > 0) {
    let cont = Number(minutesScreen.textContent)
    minutesScreen.textContent = String(cont - 5).padStart(2, 0)
  }
})