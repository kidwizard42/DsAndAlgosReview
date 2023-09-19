// link to the problem: https://leetcode.com/problems/pascals-triangle/?envType=daily-question&envId=2023-09-19
var generate = function (numRows) {
  const one = [1];
  const two = [1, 1];
  const three = [1, 2, 1];
  const firstLast = 1;
  const answer = [one, two, three];

  if (numRows > 3) {
    let arr = three;

    for (let i = 3; i < numRows; i++) {
      let a = 0;
      let b = 1;

      let temp = [];

      while (b < arr.length) {
        temp.push(arr[a] + arr[b]);
        a++;
        b++;
      }

      temp.unshift(firstLast); // to save myself from unshifting I could start adding nums at index one. then add the 1 to index 0;
      temp.push(firstLast);
      arr = temp;
      answer.push(temp);
    }
    return answer;
  } else {
    switch (numRows) {
      case 1:
        return [one];
      case 2:
        return [one, two];
      case 3:
        return answer;

      default:
        one;
    }
  }
};
