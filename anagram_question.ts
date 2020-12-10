export {};
////define
// A word is an anagram of another word if both use the same letters in the same quantity, but arranged differently.

// anagram('finder', 'Friend')  --> true
// anagram('hello', 'bye') --> false

////production
//// array method
function anagram(entered_string_1: string, entered_string_2: string) {
  let sorted_string_1 = entered_string_1
    .split("")
    .sort()
    .join("");
  let sorted_string_2 = entered_string_2
    .split("")
    .sort()
    .join("");
  if (sorted_string_1.length != sorted_string_2.length) return false;
  /// filter
  if (sorted_string_1 !== sorted_string_2) return false;

  return true;
}

////solution

////test
function test_anagram(
  entered_string_1: string,
  entered_string_2: string,
  expected_result: boolean
) {
  let result = anagram(entered_string_1, entered_string_2);
  return result === expected_result ? true : false;
}

// console.log(test_anagram('friend', 'finder', true));
// console.log(test_anagram('frien', 'finde', false));
