export {};

//// define
// Multiples of 3 and 5

// If we list all the intergers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these intergers is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

//// production
//// 3 , 10
function multiples_of_a_number(multiple_1: number, _number: number) {
  let result: Array<number> = [];
  let multiplier_counter = 1;
  let current_sum = multiple_1 * multiplier_counter;

  while (current_sum < _number) {
    result.push(current_sum);
    multiplier_counter++;
    current_sum = multiple_1 * multiplier_counter;
  }

  return result;
}
// console.log(multiples_of_a_number(3,10));

//// solution
function solution(
  multiple_1: number,
  multiple_2: number,
  number_to_query: number,
) {
  let multiple_1_sum = multiples_of_a_number(
    multiple_1,
    number_to_query,
  ).reduce((total, curr) => total + curr);
  let multiple_2_sum = multiples_of_a_number(
    multiple_2,
    number_to_query,
  ).reduce((total, curr) => total + curr);
  let result = multiple_1_sum + multiple_2_sum;
  return result;
}
// console.log(solution(3,5,10));

//// test
////find multiples in a number using one multiple
function test_multiples_of_a_number(
  multiple_1: number,
  number_to_query: number,
  expected_result: any,
) {
  let result = multiples_of_a_number(multiple_1, number_to_query);
  return result.toString() === expected_result.toString() ? true : false;
}

function test_solution(
  multiple_1: number,
  multiple_2: number,
  number_to_query: number,
  expected_result: number,
) {
  let result = solution(multiple_1, multiple_2, number_to_query);
  return result === expected_result ? true : false;
}

function test_suite() {
  console.log(test_multiples_of_a_number(3, 10, [3, 6, 9]));
  console.log(test_solution(3, 5, 10, 23));
}
//  test_suite()
