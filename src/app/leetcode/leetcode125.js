// link: https://leetcode.com/problems/valid-palindrome/

// c# solution
// using System.Text.RegularExpressions;
// public class Solution {
//     // psst Darwood if you ever see this try and solve it differntly.
//     //  regex makes this solution very slow for some reason.
//     public bool IsPalindrome(string s) {
//         var reg = new Regex("[^a-zA-Z0-9]");
//         s =  reg.Replace(s, "").ToLower();
//         int j = s.Length -1;
//         int i=0;

//        while(i<j)
//        {
//            if(s[i] != s[j])
//            {
//                return false;
//            }

//            i++;
//            j--;
//        }

//         return true;
//     }
// }
