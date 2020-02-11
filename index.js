function findMinAndRemove(array) {
  let minIndex = 0;
  let currentMinimumValue = array[0];
  for (let i in array) {
    if (array[i] < currentMinimumValue) {
      minIndex = i;
      currentMinimumValue = array[i];
    }
  }
  array.splice(minIndex, 1);
  return currentMinimumValue;
}

function insertionSort(array) {
  let sorted = [];
  let min;
  while (array.length > 0) {
    min = findMinAndRemove(array);
    sorted.push(min);
  }
  return sorted;
}
