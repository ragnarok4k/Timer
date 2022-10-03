export default function sound() {
  const forest = new Audio("./sounds/Floresta.wav")
  const rain = new Audio("./sounds/Chuva.wav")
  const cofeeShop = new Audio("./sounds/Cafeteria.wav")
  const firePlace = new Audio("./sounds/Lareira.wav")

  forest.loop
  rain.loop
  cofeeShop.loop
  firePlace.loop
  

  function forestSound(){
    forest.play()
    rain.pause()
    cofeeShop.pause()
    firePlace.pause()
  }
  
  function rainSound(){
    rain.play()
    forest.pause()
    cofeeShop.pause()
    firePlace.pause()
  }
  
  function coffeeShopSound(){
    cofeeShop.play()
    rain.pause()
    forest.pause()
    firePlace.pause()
  }
  
  function fireplaceSound(){
    firePlace.play()
    rain.pause()
    forest.pause()
    cofeeShop.pause()
  }

  return{
    forestSound,
    rainSound,
    coffeeShopSound,
    fireplaceSound 
  }
}