// Contains Duplicates
// link: https://leetcode.com/problems/contains-duplicate/description/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const frequencyCounter = {};

  for (let i = 0; i < nums.length; i++) {
    frequencyCounter[nums[i]] = frequencyCounter[nums[i]] + 1 || 1;
  }

  for (const key in frequencyCounter) {
    if (frequencyCounter[key] > 1) return true;
  }

  return false;
};

// second solution that checks if value is above 1 and returns the first time that is true
// memory wise is better but is only percentage points faster like its much faster
var containsDuplicate2 = function (nums) {
  const frequencyCounter = {};

  for (let i = 0; i < nums.length; i++) {
    frequencyCounter[nums[i]] = frequencyCounter[nums[i]] + 1 || 1;

    if (frequencyCounter[nums[i]] > 1) {
      return true;
    }
  }

  // for(const key in frequencyCounter){
  //     if(frequencyCounter[key] > 1) return true
  // }

  return false;
};
