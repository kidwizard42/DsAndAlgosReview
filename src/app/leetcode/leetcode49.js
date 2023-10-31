// link: https://leetcode.com/problems/group-anagrams/description/

// C# solution
// public IList<IList<string>> GroupAnagrams(string[] strs) {

//     Dictionary<string,List<string>> obj = new();
//     List<List<string>>  res = new();

//     foreach(string word in strs)
//     {
//             var sorted = new char[word.Length];
//             for(int i =0; i< word.Length; i++)
//             {
//                     var c = word[i];
//                     sorted[i]= c;
//             }

//             Array.Sort(sorted);
//             var hashMapKey = new String(sorted);

//             if(obj.ContainsKey(hashMapKey))
//             {
//                     obj[hashMapKey].Add(word);
//             }else
//             {
//                     obj[hashMapKey] = new List<string>(){word};
//             }

//     }

//     foreach(var list in obj)
//     {
//             res.Add(list.Value);
//     }

//     return res.ToArray();
// }
