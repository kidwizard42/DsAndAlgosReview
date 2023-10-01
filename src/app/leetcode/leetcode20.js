// link to problem: https://leetcode.com/problems/valid-parentheses/description/
// my solution is very slow and takes a ton of memory. lots of trimming can be done.

// Notes: solution need a stack. I did well to think of different ways to solve
//     like 2 pointers and such but need to try and remember if a DS could work as well.
var isValid = function (s) {
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  //could be solved without using inverse obj
  const inv = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  if (s.length % 2 != 0) return false;
  if (inv[s[s.length - 1]] === undefined) return false;

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      stack.push(s[i]);
    } else {
      if (inv[s[i]] !== stack[stack.length - 1]) return false;
      stack.pop();
    }
  }

  // could just return  "stack.length >0" my version is more convoluted
  if (stack.length > 0) return false;

  return true;
};
