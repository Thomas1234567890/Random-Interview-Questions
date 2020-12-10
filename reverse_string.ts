export {};

//// define
//// reverse a string
//// production
////old
// function reverse_string(input_string: string) {
//   let result = "";
//   let len = input_string.length;
//   while (len > 0) {
//     result += input_string.slice(-1);
//     input_string = input_string.slice(0, -1);
//     len--;
//   }
//   return result;
// }

//// convert string to array and use the revers method
function reverse_string(input_string) {
  let result = input_string
    .split("")
    .reverse()
    .join("");
  return result;
}

//// solution
// reverse_string("abcd");

//// test

function test_reverse_string(input_string: string, expected_result: string) {
  const result = reverse_string(input_string);
  return result === expected_result ? true : false;
}
// console.log(test_reverse_string("abcd", "dcba"));
