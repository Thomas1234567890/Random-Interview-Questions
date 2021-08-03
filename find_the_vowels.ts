export {vowel_counter};
////define

//// return the number of vowels in a string

////production
function vowel_counter(entered_string: string, vowels: Array<string>) {
  let counter = 0;
  for (let char of entered_string) {
    if (vowels.includes(char)) counter++;
  }

  return counter;
}

// //solution
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// vowel_counter('hello',vowels);

////test

function test_vowel_counter(
  entered_string: string,
  vowels: Array<string>,
  expected_value: number
) {
  let result = vowel_counter(entered_string, vowels);
  return result === expected_value ? true : false;
}

function testcase() {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  console.log(test_vowel_counter('Hello', vowels, 2));
}

// testcase();
