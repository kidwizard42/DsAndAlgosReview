/*  

  link to problem: https://leetcode.com/problems/merge-sorted-array/

  KEY TAKEAWAYS: If the data is sorted like in this problem you can take advantage of that. 
  usually means it can be solved better than brute force. 
  you need to find ways to use that to solve the problem.

  IE: since both arr are sorted smallest to largest, iterating over the array backwards makes sense.
    comparing largest num


  pseudo code below
    3 pointers
    
    a, b , v. indicies not the value
    
    a = last num in nums1
    b = last num in nums2
    v = null but placed at end of array. 
    
    iterate backwards. use nums2 to know when you can stop decrementing
    compare b and a. 
        if b>a V === b, then decrement b and v
        if a> b V ===a , then decrement a and v
        if a===b pick b v = a decrement a    MAY NEED CHANGING!!!
        

      starting point
                  a                      b          
     nums1 = [1,2,3,0,0,0] nums2 = [2,5,6]
                        v  
----------------------------------------------
      after one iteration                  
                  a                   b          
     nums1 = [1,2,3,0,0,6] nums2 = [2,5,6]
                      v  
----------------------------------------------
      after another iteration.
                  a                 b          
     nums1 = [1,2,3,0,5,6] nums2 = [2,5,6]
                    v  
 ----------------------------------------------
    etc.
                a                   b          
     nums1 = [1,2,2,3,5,6] nums2 = [2,5,6]
                  v                       

*/
var merge = function (nums1, m, nums2, n) {
  let a = m - 1;
  let b = n - 1;
  let v = nums1.length - 1;

  while (b >= 0) {
    if (nums2[b] > nums1[a]) {
      nums1[v] = nums2[b];
      b--;
      v--;
    } else if (nums1[a] > nums2[b]) {
      nums1[v] = nums1[a];
      a--;
      v--;
    } else {
      nums1[v] = nums2[b];
      b--;
      v--;
    }
  }

  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // should log [1,2,2,3,5,6] time comlexity is O(m+n) (( i think ))
