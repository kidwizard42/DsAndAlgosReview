// link https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

// C# solution:
// public int[] TwoSum(int[] nums, int target) {

//     // two pointers one at the max and one at the min.

//     // if sum < target increment the lp.
//     // if sum > target decrement the rp.

//     int lp = 0;
//     int rp = nums.Length-1;
//     int sum = nums[lp]+nums[rp];
//     var list = new List<int>();

//     while(lp < rp)
//     {

//         if(sum < target){
//             lp++;
//         }else if (sum> target){
//             rp--;
//         }else if (sum == target){
//             list.Add(++lp);
//             list.Add(++rp);
//             return list.ToArray();
//         }
//         sum = nums[lp]+nums[rp];
//     }

//     return null;
// }
