// link: https://leetcode.com/problems/insert-interval/description/
// blind 75

// C#  solution
// public class Solution {
//     public int[][] Insert(int[][] intervals, int[] newInterval) {

//         var res = new List<int[]>();

//         foreach( var interval in intervals)
//         {
//             if(interval[0]> newInterval[1])
//             {
//             // if newInterval starts before interval
//                 res.Add(newInterval);
//                 newInterval= interval;
//             }else if( newInterval[0] > interval[1])
//             {
//             // if newInterval is after interval
//                 res.Add(interval);
//             }
//             else
//             {
//             // if newInterval overlaps with curr interval
//                 newInterval[0] = Math.Min(interval[0], newInterval[0]);
//                 newInterval[1] = Math.Max(interval[1], newInterval[1]);
//             }

//         }

//         res.Add(newInterval);

//         return res.ToArray();

//     }
// }
