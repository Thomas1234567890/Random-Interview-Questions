//// define
//// fibinacci sequence
//// start with a two number array and a counter
//// add the last two mumbers in the array and add the answer to the array
//// repeat this process until the counter expires

////production
let counter = 5;
let number_array = [0, 1];

function fib_solo(number_array: Array<number>) {
  const first_number = number_array[number_array.length - 1];
  const second_number = number_array[number_array.length - 2];
  const sum = first_number + second_number;
  number_array.push(sum);
  return number_array;
}
fib_solo([1, 2]);

////solution
function solution(counter: number, number_array: Array<number>) {
  while (counter > 0) {
    fib_solo(number_array);
    counter--;
  }
  console.log(number_array);
}
// solution(counter, number_array);

////test_suite

function test_fib_solo(
  number_array: Array<number>,
  expected_result: Array<number>,
) {
  const result = fib_solo(number_array);
  return result.toString() === expected_result.toString() ? true : false;
}

function test_suite() {
  console.log(test_fib_solo([1, 2], [1, 2, 3]));
}
// test_suite();
export { solution };
