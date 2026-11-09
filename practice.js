// 1. Write a function that removes duplicates from an array.
const arr = [2,6,7,3,9,1,7,8,1,2,2];

function RemoveDuplicates(arr){
  for(i=0;i<arr.length;i++){
    for(j = i+1;j<arr.length;j++){
      if(arr[i]===arr[j]){
        arr.splice(j, 1);
        j--;
      }
    }
  }
 return arr; 

  }

console.log(RemoveDuplicates(arr))