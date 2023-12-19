class Frames{
  constructor() {
    
  }

  primerTiro() {
    let arr1 = [];
    for(let i = 0; i < 10; i++){
        let tiro1 = Math.round(Math.random() * 10);
        arr1.push(tiro1)
    }
    return arr1;
  }

  segundoTiro() {// numero aleatorio para el segundo tiro
    let arr2 = [];
    let tiro1 = this.primerTiro()
    for(let i = 0; i < 10; i++){
        let tiro2 = Math.round(Math.random() * (10 - tiro1[i]));
        arr2.push(tiro2)
    }
    return arr2;
  }
  
  puntuacionTotal() {
    let tiro1 = this.primerTiro();//Chuza o Strike suma los dos tiros siguientes, Spare suma únicamente el siguiente tiro
    let tiro2 = this.segundoTiro();
    let puntuacionTotal = [];
    

    for(let i = 0; i < 10; i++){
        if(i < 10 ) {
            if(tiro1[i] === 10 ) { //chuza
              let puntuacion = 10 + tiro1[i +1] + tiro2[i +1];
                puntuacionTotal.push(puntuacion)
            }else if(tiro1[i] + tiro2[i] ===10) { //spare
    
                puntuacionTotal.push( 10 + tiro1[i + 1])  //!!
            
            }else if(tiro1[i] + tiro2[i] < 10){ //tiros menores a 10
                puntuacionTotal.push( tiro1[i] + tiro2[i])
            }
        } else {

        }
      
    }
    console.log("puntuacion",puntuacion)
    return puntuacion
  
  }

  frames(){
      let tiro1 = this.primerTiro()
      let tiro2 = this.segundoTiro()
      let puntos = this.puntuacionTotal()
      for(let i = 0; i < 10; i++){
          console.log(' _________')
          console.log(`|  ${tiro1[i]} | ${tiro2[i]}  |`)
          console.log('|____|____|')
          console.log('|         |')
          console.log(`|__${puntos[i]}__|`)
      }
}

}

const frame = new Frames();

console.log(frame.frames());