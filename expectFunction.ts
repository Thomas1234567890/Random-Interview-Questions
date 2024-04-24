// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
//
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
//
//
//   Example 1:
//
// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
//   Example 2:
//
// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".
//   Example 3:
//
// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.

const expect = (expectedValue: any) => {
  return {
    toBe: (assertionValue: any): boolean => expectedValue === assertionValue,
    notToBe: (assertionValue: any): boolean => expectedValue !== assertionValue,
  };
};

const testExpect = () => {
  expect("xxx").toBe("xxx") === true
    ? console.log(`%c Passed`, "background:green; color:Black;")
    : console.log("%c failed", "background:red;");
  expect("yyy").toBe("yyy") === true
    ? console.log("%c Passed", "background:green;")
    : console.log("%c failed", "background:red;");
  expect(111).toBe(111) === true
    ? console.log("%c Passed", "background:green;")
    : console.log("%c failed", "background:red;");
  expect(null).toBe(null) === true
    ? console.log("%c Passed", "background:green;")
    : console.log("%c failed", "background:red;");
  expect("xxx").notToBe(null) === true
    ? console.log("%c Passed", "background:green;")
    : console.log("%c failed", "background:red;");
  expect("xxx").notToBe(111) === true
    ? console.log("%c Passed", "background:green;")
    : console.log("%c failed", "background:red;");
  expect(undefined).notToBe("xxx") === true
    ? console.log("%c Passed", "background:green;")
    : console.log("%c failed", "background:red;");
};
testExpect();
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
