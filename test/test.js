const Frame = require("../script")


describe("frames", () => {
    let frame;

    beforeEach(() => {
      frame = new Frame();
    });

    test("tiro1 hace un array con numeros alesatorios entre 0 y 10", () => {
      const frame = new Frame()
      const arr = frame.tiro1
        let output = true
      for(let i = 0; i < 10; i++){
        if(arr[i] > 10){
            output = false
        }
      } expect(output).toBe(true);
    });

    test("tiro2 should hace un array con numeros aleatorios entre o y (10 - tiro1[i])", () => {
      const arr1 = frame.tiro1;
      const arr2 = frame.tiro2;
      let output = true;
  
      for (let i = 0; i < 10; i++) {
        if (arr2[i] < 0 || arr2[i] > (10 - arr1[i])) {
          output = false;
        }
      }
  
      expect(output).toBe(true);
    });   

    test("Calcula correctamente puntuacionTotal en caso de spare", () => {
      // Simula una situación de spare en el primer frame
      frame.tiro1 = [5, 5];
      frame.tiro2 = [5, 2];
      frame.puntuacionTotal();
    
      // La puntuación total después del spare debería ser mayor o igual a 10
      expect(frame.puntuacionGlobal[1]).toBeGreaterThanOrEqual(10);
    });
    
    test("Calcula correctamente puntuacionTotal en caso de chuza", () => {
      frame.tiro1 = [10, 3, 5];
      frame.tiro2 = [0, 2, 0];
      frame.puntuacionTotal();
  
      expect(frame.puntuacionGlobal[1]).toBeGreaterThanOrEqual(10);
    });

    test("Calcula correctamente puntuacionTotal para casos que no son spare o chuza", () => {
      frame.tiro1 = [2, 3, 4];
      frame.tiro2 = [5, 1, 2];
      frame.puntuacionTotal();
  
      expect(frame.puntuacionGlobal[2]).toBeGreaterThanOrEqual(2);
    });
  });
