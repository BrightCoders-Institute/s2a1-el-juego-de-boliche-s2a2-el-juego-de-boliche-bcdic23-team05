class Frames{
  constructor() {
    this.tiro1 = [];
    this.tiro2 = [];
    this.puntuacionGlobal = [];
    this.primerTiro();
    this.segundoTiro();
    this.puntuacionTotal();
    this.frames();
    
    this.tiroExtra1 = 5;
    this.tiroExtra2 = 2;
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
      if(i < 9){
        
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
      }else {
        console.log(1)
        if(this.tiro1[i] === 10 ) { //chuza
          console.log(tiroExtra1)
          //let numero1 = Math.round(Math.random() * 10);
          //let numero2 = Math.round(Math.random() * (10 - this.tiro1[i]));
          //this.tiro1.push(this.tiroExtra1);
          //this.tiro2.push(this.tiroExtra2);
         // puntuacion +=  10 + this.tiro1[i +1] + this.tiro2[i +1];
         // this.puntuacionGlobal.push(puntuacion);
        }else if(this.tiro1[i] + this.tiro2[i] === 10){
          console.log(this.tiroExtra1)
          console.log(this.tiroExtra2)
          //let numero1 = Math.round(Math.random() * 10);
          //this.tiro1.push(this.tiroExtra1);
          //puntuacion +=  10 + this.tiro1[i +1];
          //this.puntuacionGlobal.push(puntuacion);
        }
      }
    }
  }

  frames(){
      for(let i = 0; i < 10; i++) {
        if(i < 9){
          console.log(' _________')
          console.log(`|  ${this.tiro1[i]} | ${this.tiro2[i]}  |`);
          console.log('|____|____|');
          console.log('|         |');
          console.log(`| ${this.puntuacionGlobal[i]} |`)
          //this.puntuacionGlobal[i] <= 9 ? console.log(`|    ${this.puntuacionGlobal[i]}    |`) : console.log(`|    ${this.puntuacionGlobal[i]}   |`);
          console.log('|_________|');
        }
        else {
          console.log(' _________')
          console.log(`|  ${this.tiro1[i]} | ${this.tiro2[i]}  |  ${this.tiroExtra1}`);
          console.log('|____|____|');
          console.log('|         |');
          console.log(`| ${this.puntuacionGlobal[i]} |`)
          //this.puntuacionGlobal[i] <= 9 ? console.log(`|    ${this.puntuacionGlobal[i]}    |`) : console.log(`|    ${this.puntuacionGlobal[i]}   |`);
          console.log('|_________|');
        }
          
      }


}

}

const frame = new Frames();
console.log(frame.tiro1);
console.log(frame.tiro2);
console.log(frame.puntuacionGlobal);

module.exports = Frames