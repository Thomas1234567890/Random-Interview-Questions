//// define

//// print numbers 0 - 100
//// at every multiple of 3 print fizz
//// at every multiple of 5 print buzz
//// at every multiple of 15 print fizzbuzz

//// production
// let start = 0, end = 30;

function fizzbuzz(num: number) {
  let result = "";
  // console.log(start)
  if (num % 3 == 0) result += "fizz";

  if (num % 5 == 0) result += "buzz";

  return result == "" ? num : result;
}

//// solution
function solution(start, end) {
  while (start <= end) {
    console.log(fizzbuzz(start));
    start++;
  }
}
// solution(1,20);

//// test
function test_fizzbuzz(num: number, expected_result: any) {
  const result = fizzbuzz(num);
  return result === expected_result ? true : false;
}

function test_suite() {
  console.log(test_fizzbuzz(1, 1));
  console.log(test_fizzbuzz(3, "fizz"));
  console.log(test_fizzbuzz(5, "buzz"));
  console.log(test_fizzbuzz(15, "fizzbuzz"));
}
// test_suite();
