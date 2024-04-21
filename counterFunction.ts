/**
 * @param {number} n
 * @return {Function} counter
 */
export const createCounter = (n: number): Function => {
  let isFirstCall: boolean = true;
  let result = 0;
  return function (): number {
    if (isFirstCall) {
      isFirstCall = false;
      result = n;
      return n;
    }
    result++;
    return result;
  };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
console.log(counter()); // 13
