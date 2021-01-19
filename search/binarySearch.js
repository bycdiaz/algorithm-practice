const sampleArray1 = [2, 3, 4, 10, 40];
const sampleArray2 = [1, 3, 5, 6, 8, 10, 11];
const sampleArray3 = [12, 34, 34, 99, 122, 200, 250, 300, 400, 431, 432, 584, 600];
const sampleArray4 = [1, 4, 12, 34, 56, 87, 99, 200];

function binarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    const currentElement = array[middleIndex];

    if (currentElement === target) {
      return true;
    }

    if (target < currentElement) {
      rightIndex = middleIndex -1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return false;
}

console.log(binarySearch(sampleArray1, 3));
// true

console.log(binarySearch(sampleArray2, 8));
// true

console.log(binarySearch(sampleArray3, 431));
// true

console.log(binarySearch(sampleArray4, 7));
// false
