const Frame = require("../script")


describe("frames", () => {
    test("it should make an array from random values between 0 and 10", () => {
      const frame = new Frame()
      const arr = frame.tiro1
        let output = true
      for(let i = 0; i < 10; i++){
        if(arr[i] > 10){
            output = false
        }
      } expect(output).toBe(true);
    });
  });
