// link to problem
// https://www.hackerrank.com/challenges/three-month-preparation-kit-sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-three

function sockMerchant(n, arr) {
  // Write your code here
  let obj = {};
  let answer = 0;
  // iterate over array,
  // add each array item to obj or increase count

  // iterate over obj
  // get all the pairs. MAth.floor(num /2)

  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) obj[arr[i]]++;
    else obj[arr[i]] = 1;
  }

  for (let key in obj) {
    console.log(obj[key]);
    let count = Math.floor(obj[key] / 2);
    answer += count;
  }
  return answer;
}
