// Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// C# solution
// public class Solution {
//     public int LengthOfLongestSubstring(string s) {

//         int lp = 0;
//         int longest = 0;
//         HashSet<char> hash = new();

//         for(int rp =0; rp<s.Length; rp++)
//         {

//             while(hash.Contains(s[rp]))
//             {
//                 hash.Remove(s[lp]);
//                 lp++;
//             }
//             hash.Add(s[rp]);
//             if(rp+1-lp > longest)
//             {
//                 longest = rp +1 -lp;
//             }
//         }

//         return longest;

//     }
// }
