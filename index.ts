import './style.css';

import './fibonacci_sequence';
import './reverse_string';
import './fizzbuzz';
import './multiples_question';
import './anagram_question';
import './find_the_vowels';
import './array_methods';

// console.log('index.ts loaded');
import './dropdown_button/_style.scss';
console.clear();
const log = message => {
  console.log(message);
};
 
///first non-repeating character
/// input string  : aaabccc
/// answer        : b

// const test_non_repeating_string = (expected_result, test_string) => {
//   const acutal_value = get_non_repeating_value(test_string);
//   return acutal_value === expected_result ? true : false;
// };
// console.log(test_non_repeating_string('b', 'aaabccc'));

////  letters that have been counted at least once go here
let _first_recored_instance = [];
//// letters that have a confirmed duplicate get sent here
let _confirmed_duplicates = [];

const check_if_letter_is_in_array = (_letter, _array) => {
  return _array.includes(_letter) ? true : false;
};

const get_non_repeating_value = _string => {
  ///convert sting to Array
  let _test_array = _string.split('');

  let result = _test_array.forEach((item, index) => {
    // log(`${index} ${item}`);
  });

  for (let i = 0; i < _test_array.length; i++) {
    log(`${i}`);
  }
  log('end');

  ////  while loop through the _test_array by its remaining length

  // while (_test_array.length > 0 )
  // {
  // log(_test_array[0]);
  // let _letter = _test_array[0];
  ////  check to see if the first value [0] is present in either the
  ////  first recorded instance or the duplicates array.
  ////  if present in the confirmed duplicates array, remove it from the _test_array.
  // if (check_if_letter_is_in_array(_letter, _confirmed_duplicates) == true) {
  //   _test_array.shift();
  // }
  // ////  if present in the _first_recored_instance, add it to the confirmed duplicates
  ////  array and remove its value from both the _first_recored_instance and
  ////  _test_array;
  // else if (
  // check_if_letter_is_in_array(_letter, _first_recored_instance) == true
  // ) {
  // } else {
  //     log('xxx');
  //   }
  // }

  ////  get first two values and compare

  ////  are they the same ?
  ////  if true we remove the two values from the _test_array
  ////  and add the letter to the confirmed duplicate array

  ////  if false than add the first value to the _first_recored_instance
  ////  and then remove the letter from the _test_array

  ////  in the end return the _first_recored_instance array,
  ////  letters with one recoreded instance.
};

get_non_repeating_value('aaabccc');
