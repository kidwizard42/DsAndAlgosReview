// link: https://leetcode.com/problems/climbing-stairs/description/

// first solution
// could just use vars to hold the values. should save space
var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  }

  let arr = [1, 2];
  for (let i = 2; i < n; i++) {
    const newCalc = arr[arr.length - 1] + arr[arr.length - 2];

    arr[0] = arr[1];
    arr[1] = newCalc;
  }

  return arr[arr.length - 1];
};

// notes I used to solve it

// 1 steps = 1 distinct ways
// 2 steps = 2 distinct ways
// 3 steps = 3 distinct ways
// 4 steps = 5 distinct ways
// 5 steps  =  8 distinct ways

// 4 steps = 5 distinct ways

// 1 1 1 1
// 2 2
// 1 1 2
// 2 1 1
// 1 2 1

// 5 steps  =  8 distinct ways

// 1 1 1 1 1
// 1 1 1 2
// 1 1 2 1
// 2 1 1 1
// 1 2 1 1
// 2 2 1
// 1 2 2
// 2 1 2

//  better memory bc using vars instead of static array or dynamic array.
var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  }

  let n1 = 1;
  let n2 = 2;

  for (let i = 2; i < n; i++) {
    const newCalc = n1 + n2;

    n1 = n2;
    n2 = newCalc;
  }

  return n2;
};
