//// define
//// reverse a string

//// production
function reverse_string(input_string: string) {
  let result = "";
  // while (input_string.length > 0)
  // {
  //   console.log(input_string);
  //   result += input_string.slice(-1)
  //   input_string.slice(0,-1);
  // // }
  return result;
}
console.log(reverse_string("abcd"));
//// solution

//// test

function test_reverse_string(input_string: string, expected_result: string) {
  const result = reverse_string(input_string);
  return result === expected_result ? true : false;
}
// test_reverse_string('abcd', 'dcba');
