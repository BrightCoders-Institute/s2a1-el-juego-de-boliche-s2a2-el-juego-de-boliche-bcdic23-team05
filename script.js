class Frames{
  constructor() {
    this.tiro1 = [];
    this.tiro2 = [];
    this.puntuacionGlobal = [];
    this.primerTiro();
    this.segundoTiro();
    this.puntuacionTotal();
    this.frames();
  }

  primerTiro() {
    for(let i = 0; i < 10; i++) {
        let numero = Math.round(Math.random() * 10);
        this.tiro1.push(numero);
    }
  }

  segundoTiro() {// numero aleatorio para el segundo tiro
    for(let i = 0; i < 10; i++) {
        let numero = Math.round(Math.random() * (10 - this.tiro1[i]));
        this.tiro2.push(numero);
    }
  }
  
  puntuacionTotal() {
    let puntuacion = 0;
    for(let i = 0; i < 10; i++){
      if(i <=8 ){
        
        if(this.tiro1[i] === 10 ) { //chuza
          puntuacion +=  10 + this.tiro1[i +1] + this.tiro2[i +1];
          this.puntuacionGlobal.push(puntuacion);

        }else if(this.tiro1[i] + this.tiro2[i] === 10) { //spare
          puntuacion +=  10 + this.tiro1[i +1];
          this.puntuacionGlobal.push(puntuacion); //!!
        
        }else if(this.tiro1[i] + this.tiro2[i] < 10){ //tiros menores a 10
          puntuacion +=  this.tiro1[i] + this.tiro2[i];
          this.puntuacionGlobal.push(puntuacion)
        }
      } else { //evalúa el último frame, ya que otorga tiros adicionales si se hace una chuza o un spare.
        if(this.tiro1[i] === 10 ) { //chuza
          let numero1 = Math.round(Math.random() * 10);
          let numero2 = Math.round(Math.random() * (10 - numero1));
          this.tiro1.push(numero1);
          this.tiro2.push(numero2);
          puntuacion +=  10 + this.tiro1[i +1] + this.tiro2[i +1];
          this.puntuacionGlobal.push(puntuacion);
          
        }else if(this.tiro1[i] + this.tiro2[i] === 10){//spare
          let numero1 = Math.round(Math.random() * 10);
          this.tiro1.push(numero1);
          puntuacion +=  10 + this.tiro1[i +1];
          this.puntuacionGlobal.push(puntuacion);
          
        }else if(this.tiro1[i] + this.tiro2[i] < 10){
          puntuacion +=  this.tiro1[i] + this.tiro2[i];
          this.puntuacionGlobal.push(puntuacion);
        }
      }
    }
  }

  frames(){
      for(let i = 0; i < 10; i++) {
        if(i <= 8){
          console.log(' _________')
          console.log(`|  ${this.tiro1[i]} | ${this.tiro2[i]}  |`);
          console.log('|____|____|');
          console.log('|         |');
          console.log(`|   ${this.puntuacionGlobal[i]}    |`)
          console.log('|_________|');
          console.log(`Frame: ${i + 1}`);
        }
        else if(this.tiro1[i] === 10){ //Chuza en el último frame
          console.log(' ______________')
          console.log(`|  ${this.tiro1[i]} | ${this.tiro2[i + 1]} |  ${this.tiro1[i + 1]} |`);
          console.log('|_____|________|');
          console.log('|              |');
          console.log(`|       ${this.puntuacionGlobal[i]}     |`)
          console.log('|______________|');
          console.log(`Frame: ${i + 1}`);
        }
        else if(this.tiro1[i] + this.tiro2[i] === 10){//Spare en el último frame
          console.log(' ______________')
          console.log(`|  ${this.tiro1[i]}  | ${this.tiro2[i]}  | ${this.tiro1[i + 1]} |`);
          console.log('|_____|________|');
          console.log('|              |');
          console.log(`|      ${this.puntuacionGlobal[i]}     |`)
          console.log('|______________|');
          console.log(`Frame: ${i + 1}`);
        }
        else {//tiros menores a 10 en el último frame
          console.log(' _________')
          console.log(`|  ${this.tiro1[i]} | ${this.tiro2[i]}  |`);
          console.log('|____|____|');
          console.log('|         |');
          console.log(`|   ${this.puntuacionGlobal[i]}    |`);
          console.log('|_________|');
          console.log(`Frame: ${i + 1}`);
        }  
          
      }


}

}

const frame = new Frames();
console.log(frame.tiro1);
console.log(frame.tiro2);
console.log(frame.puntuacionGlobal);

module.exports = Frames