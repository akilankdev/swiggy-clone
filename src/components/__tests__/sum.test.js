import {sum} from "../sum";

test("sum() should return the sum of two numbers",() => {
  const result = sum(4,7);
  expect(result).toBe(11);
})