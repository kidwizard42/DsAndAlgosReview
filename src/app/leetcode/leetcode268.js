// link: https://leetcode.com/problems/missing-number/description/

// 3rd  solution. n time complexity and 1 space.
// same as 2nd solution just uses one less loop.

// int numsSum = 0;
// int totalSum = 0;

// for(int i = 0; i < nums.Length; i++)
// {
//     numsSum += nums[i];
//     totalSum+= i;
// }
// totalSum+= nums.Length;

// return totalSum - numsSum;

// second solution  n time complexity and 1 space complexity

// var sum =  sum of all ints in nums
// var total =  sum of all nums from 0 to n
// return the totalSum - sum
// loop to get
//     int numsSum = 0;
//     int totalSum = 0;

//     for(int i = 0; i < nums.Length; i++)
//     {
//         numsSum += nums[i];
//     }

//     for(int i=0; i <= nums.Length; i++)
//     {
//         totalSum += i;
//     }

//     return totalSum - numsSum;

// }

// first solution  n logn time complexity

// sort. nlogn.
// iterate over nums with var at 0. increment var and if it doesn't match with nums[i] then thats the missing number

// Array.Sort(nums);
// int m =0;
// for(int i=0; i<nums.Length; i++){
//     if(nums[i] != m)
//     {
//         return m;
//     }
//     m++;
// }
// return nums.Length;
