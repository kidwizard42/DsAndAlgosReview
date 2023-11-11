// link: https://leetcode.com/problems/longest-repeating-character-replacement/description/

// theres a math trick that makes this even faster to solve. not implemented.
public int CharacterReplacement(string s, int k) 
    {
        Dictionary<char, int> obj = new();
        int lp = 0;
        int res = 0;

        for (int rp = 0; rp < s.Length; rp++)
        {
            int count = 0;

            if (obj.ContainsKey(s[rp]))
            {
                obj[s[rp]]++;
            }
            else
            {
                obj.Add(s[rp], 1);
            }

            foreach (var o in obj)
            {
                count = Math.Max(count, o.Value);
            }

            if (rp - lp + 1 - count > k)
            {
                obj[s[lp]]--;
                lp++;
            }


            res = Math.Max(res, rp - lp + 1);
        }

        return res;
        
    }    