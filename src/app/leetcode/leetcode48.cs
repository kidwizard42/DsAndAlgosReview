// link: https://leetcode.com/problems/rotate-image/description/

// first solution. buzzer beater. (45m) but very slow space and time complexity.
// also they didn't want a solution that used a second matrix so I used a hashmap. potentially could be cheating?
public class Solution {
    public void Rotate(int[][] matrix) {
        var obj = new Dictionary<string,int>();
        var first = matrix.Length -1;
        var sec = 0;

        var p = 0;
        var p2 = 0;
        for(int i =(matrix.Length * matrix.Length)-1; i>=0; i--)
        {
            var item = matrix[first][sec];

            if(obj.ContainsKey($"{first}l{sec}")){
                item = obj[$"{first}l{sec}"];
            }
            
            obj.Add($"{p}l{p2}", matrix[p][p2]);

            matrix[p][p2] = item;

            first --; 
            if(first < 0)
            {
                first = matrix.Length-1;
                sec++;

            }

            p2++;
            if(p2 > matrix.Length-1){
                p2 = 0;
                p++;
            }
        }

        
    }
}
//  [[7,2,3],[4,5,6],[7,8,9]]


// {
    // 0,0: 1
    //0,1:  2
    // 0,3:  3
// }