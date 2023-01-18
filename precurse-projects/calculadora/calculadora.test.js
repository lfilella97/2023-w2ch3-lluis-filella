import { suma } from "./calculadora";

describe("given a function suma", () => {
  describe("When it recives number 2 and number 3", () => {
    test("then it should return 5", () => {
      const firstNumber = 2;
      const secondNumber = 3;
      const result = 5;

      const calculation = suma(firstNumber, secondNumber);

      expect(calculation).toBe(result);
    });
  });
});
