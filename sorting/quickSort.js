function quickSort(inputArray) {
  if (inputArray.length <= 1) {
     return inputArray;
  }

  const leftArray = [];              
  const rightArray = [];
  const pivot = inputArray.pop();
  
  for (let index = 0; index < inputArray.length; index++) {
    if (inputArray[index] <= pivot) {
      leftArray.push(currentValue);
    } else {
      rightArray.push(currentValue);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

console.log(quickSort([9, 0, 2, 7, -2, 6, 1]));
// [-2, 0, 1, 2, 6, 7, 9]
