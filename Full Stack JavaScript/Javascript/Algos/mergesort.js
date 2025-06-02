function merge(arr, left, mid, right) {
  let temp = [];
  let i = left,
    j = mid+1;
  
  while(i<=mid && j<=right) {
    if(arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  while(i<=mid) {
    temp.push(arr[i]);
    i++;
  }
  while(j<=right) {
    temp.push(arr[j]);
    j++;
  }

  for(let i=0;i<temp.length;i++) arr[left+i] = temp[i];
}

function mergeSort(arr, left, right) {
  if(left < right) {
    let mid = Math.floor(left + (right-left)/2); // Prevents overflow
    
    mergeSort(arr, left, mid);
    mergeSort(arr, mid+1, right);
    merge(arr, left, mid, right);
  }

  return;
}

let arr = [3, 2, 1, 13, 8, 5, 0, 1];
mergeSort(arr, 0, arr.length-1);
console.log(arr);