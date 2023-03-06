let arr = [1, 4, 5, 6, 7, 8, 3, 4];

// const checkDup = (arr) => {
//   let hashMap = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!hashMap[arr[i]]) hashMap[arr[i]] = 1;
//     else return arr[i];
//   }
// };
const checkDup = (arr) => {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) return arr[i];
    set.add(arr[i]);
  }
  console.log(set);
  return null;
};

console.log(checkDup(arr));

// function selctionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//         [arr[j], arr[i]] = [arr[i], arr[j]];
//       }
//     }
//   }
//   console.log(arr);
// }
// selctionSort([4, 6, 2, 9, 1]);
