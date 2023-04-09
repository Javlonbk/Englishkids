// function getRandomItem(arr) {
//   // get random index value
//   const randomIndex = Math.floor(Math.random() * arr.length);

//   // get random item
//   const item = arr[randomIndex];

//   return item;
// }

// const array = [1, "hello", 5, 8];

// const result = getRandomItem(array);
// console.log(result);

let unshuffled = ["hello", "a", "t", "q", 1, 2, 3, { cats: true }];

let shuffled = unshuffled
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

console.log(shuffled);
