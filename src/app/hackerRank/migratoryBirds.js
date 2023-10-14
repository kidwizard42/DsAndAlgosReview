// link: https://www.hackerrank.com/challenges/three-month-preparation-kit-migratory-birds/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-three

function migratoryBirds(arr) {
  // Write your code here
  const b = {};
  let id;

  // add each id to array
  for (let i = 0; i < arr.length; i++) {
    b[arr[i]] = b[arr[i]] + 1 || 1;
  }

  // get id with the most views.
  // But also the smaller of the ids if there are more than one id w the largest view
  for (const key in b) {
    if (b[key] > b[id]) {
      id = key;
    } else if (b[key] === b[id]) {
      id = Math.min(key, id);
    } else if (id === undefined) {
      id = key;
    }
  }

  return id;
}
