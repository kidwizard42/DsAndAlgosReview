// https://leetcode.com/problems/container-with-most-water/description/

// needed the hints to figure out how the two pointers solved it.
// solved within 45 minutes. 

public int MaxArea(int[] height) {
        int res = 0;
        int lp = 0; 
        int rp = height.Length-1;

        while(lp < rp)
        {
            var min = Math.Min(height[lp], height[rp]);
            var dis = rp - lp;

            res = Math.Max(res, dis* min);

            if(height[lp] > height[rp])
            {
                rp--;
            } else {
                lp++;
            }
        }

        return res;

    }