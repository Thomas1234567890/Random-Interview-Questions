// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
//
//   The three functions are:
//
//   increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
//
//
//   Example 1:
//
// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
//   const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
// Example 2:
//
// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
//   const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0
//
//
// Constraints:
//
//   -1000 <= init <= 1000
// 0 <= calls.length <= 1000
// calls[i] is one of "increment", "decrement" and "reset"

const createCounter = function (startingNumber: number) {
  let result: number = startingNumber;
  return {
    increment: (numberToAdd: number = 1) => (result = result + numberToAdd),
    decrement: (numberToSubtractBy: number = 1) =>
      (result = result - numberToSubtractBy),
    reset: () => (result = startingNumber),
    count: () => result,
  };
};

const testIncrement = () => {
  const startingNumber = 1;
  const counter = createCounter(startingNumber);
  counter.increment();
  counter.count() === startingNumber + 1
    ? console.log(" ✅ incremented counter to 2")
    : console.log(
      `❌ failed increment, counter is ${counter.count()} - expected 2`,
    );
};

const testDecrement = () => {
  const startingNumber = 3;
  const counter = createCounter(startingNumber);
  counter.decrement();
  counter.count() === startingNumber - 1
    ? console.log(" ✅ passed - decremented counter to 2")
    : console.log(
      `❌ failed decrement, counter is ${counter.count()} - expected 2`,
    );
};
const testReset = () => {
  const startingNumber = 3;
  const counter = createCounter(startingNumber);
  counter.increment();
  counter.increment();
  counter.increment();
  counter.reset();
  counter.count() === startingNumber
    ? console.log(
      " ✅ passed - reset counter to starting number: ",
      startingNumber,
    )
    : console.log(
      `❌ failed increment, counter is ${counter.count()} - expected 0`,
    );
};
const testCount = () => {
  const startingNumber = 99;
  const counter = createCounter(startingNumber);
  counter.count() === startingNumber
    ? console.log(" ✅ passed - count returned correct value: ", startingNumber)
    : console.log(
      `❌ failed increment, counter is ${counter.count()} - expected ${startingNumber}`,
    );
};
const testCounter = () => {
  testCount();
  testIncrement();
  testDecrement();
  testReset();
};
testCounter();
