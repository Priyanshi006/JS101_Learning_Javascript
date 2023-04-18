problem1:
let arr= ["riya", "himanshi", 1,0,6, true];
for(let i=0; i<arr.length; i++){
  console.log(i+1, arr[i]);

}




problem2:
let lower_case= ["a", "b", "c","d","e"];

let upper_case= ["A","B","C", "D", "E"];

let character= "b" 

for(let i=0; i<lower_case.length;i++){
  
  if(lower_case[i]== character){
    character= upper_case[i];
  }
}

console.log(character);





problem3:
let arr= [10,9,8,3,5];



let sum=0;
let count=0;

for(let i=0; i<arr.length;i++){
     if(arr[i]%2==0){
       sum= sum + arr[i];
       count++;
     }
}

console.log(sum/count)