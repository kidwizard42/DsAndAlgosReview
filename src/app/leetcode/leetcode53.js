// link: https://leetcode.com/problems/maximum-subarray/

// second solution: O(N)
// using sliding window (litle more complicated than that so got the idea of using a prefix from neetcode)

var maxSubArray = function (nums) {
  let max = nums[0];
  let chunk = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (chunk < 0 && chunk < nums[i]) {
      chunk = nums[i];
    } else {
      chunk += nums[i];
    }

    max = max > chunk ? max : chunk;
  }

  return max;
};

// first solutions
// Solution works but O(N^2) time complexity. fails around test case 200 bc of that
var maxSubArray = function (nums) {
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let b = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      b += nums[j];
      curr = curr > b ? curr : b;
    }
    max = max > curr ? max : curr;
  }

  return max;
};

// c# solution

// public class Solution {
//   public int MaxSubArray(int[] nums) {
//       // pointer sub array

//       int sub = nums[0];
//       int max = nums[0];

//       // loop
//       for (int i = 1; i<nums.Length; i++)
//       {
//           if(sub < 0 && sub < nums[i])
//           {
//               sub = nums[i];
//           }else
//           {
//               sub += nums[i];
//           }
//           max = Math.Max(max, sub);
//       }

//       return max;
//       // if sub array is negative and smaller than nums[i]
//               // pointer sub array = nums[i]
//       // else  pointer sub array is = sub array plus nums[i]

//       // check if I need to update maximum int
//   }
// }
