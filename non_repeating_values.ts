const log = (message) => {
  console.log(message);
};

///first non-repeating character
/// input string  : aaabccc
/// answer        : answer[0] = b

////  letters that have been counted at least once go here
let _first_recored_instance = [];
//// letters that have a confirmed duplicate get sent here
let _confirmed_duplicates = [];

const check_if_letter_is_in_array = (_letter, _array) => {
  return _array.includes(_letter) ? true : false;
};

const get_non_repeating_value = (_string) => {
  ///convert sting to Array
  let _test_array = _string.split("");

  for (let i = 0; i < _test_array.length; i++) {
    // log(`${i} ${_test_array[i]}`);
    if (check_if_letter_is_in_array(_test_array[i], _confirmed_duplicates)) {
    } else if (
      check_if_letter_is_in_array(_test_array[i], _first_recored_instance)
    ) {
      /// add to _confirmed_duplicates
      _confirmed_duplicates.push(_test_array[i]);
      ///remove from _first_recored_instance
      let index = _first_recored_instance.indexOf(_test_array[i]);
      _first_recored_instance.splice(index, 1);
    } else if (
      check_if_letter_is_in_array(_test_array[i], _first_recored_instance) ==
      false
    ) {
      /// add unique value to _first_recored_instance
      // _first_recored_instance.push([_test_array[i], i])
      _first_recored_instance.push(_test_array[i]);
    } else {
      log(`error`);
    }
  }
};

export {
  _first_recored_instance,
  _confirmed_duplicates,
  get_non_repeating_value,
};
// get_non_repeating_value('aaabccc');
// log(_confirmed_duplicates);
// log(_first_recored_instance);
