// majority number
// Given a array of numbers, find the number that occurs the most times.

export const majorityNumber = (arrayOfNumbers: number[]): number => {
  if (!arrayOfNumbers) return 0;
  if (arrayOfNumbers.length === 0) return 0;
  const trackValues = {};
  let highestNumberSoFar: number = 0;
  let result: number = 0;

  for (let num of arrayOfNumbers) {
    trackValues[num] = (trackValues[num] || 0) + 1;
    if (trackValues[num] > highestNumberSoFar) {
      highestNumberSoFar = trackValues[num];
      result = num;
    }
  }
  return result;
};

const testMajorityNumber = (
  arrayOfNumbers: number[],
  expectedResult: number,
) => {
  const actualResult = majorityNumber(arrayOfNumbers);
  expectedResult === actualResult
    ? console.log(
        `%c test passed with ${actualResult}`,
        "background:green; color:Black;",
      )
    : console.log(
        `%c test failed with ${actualResult}`,
        "background:red; color:black;",
      );
};

testMajorityNumber([1, 1, 1, 2, 2], 1);
testMajorityNumber([1, 1, 2, 2, 2], 2);
testMajorityNumber([1, 1, 1, 2, 2, 3, 3, 3, 3, 3], 3);
testMajorityNumber([], 0);
testMajorityNumber([0], 0);
testMajorityNumber([-1], -1);
testMajorityNumber(null, 0);
testMajorityNumber(undefined, 0);
testMajorityNumber([11, 12], 11);
