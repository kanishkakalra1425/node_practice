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
// 2. Count how many times each word appears in a sentence.
let sentence = "This is a test sentence and this is a test";

let words = sentence.toLowerCase().split(" ");

console.log(words)


let wordCount = {};
for(let i = 0;i<words.length;i++){
  let word = words[i];
if(wordCount[word]){
  wordCount[word]++;
}
else{
  wordCount[word] = 1;
}
}
console.log(wordCount)