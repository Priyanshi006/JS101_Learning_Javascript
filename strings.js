problem 1:
let str= "hello everyone welcome to masai";

let space=0

for(let i=0; i<str.length; i++){

  if(str[i]== " "){
    space++; 
  }
}

console.log("words:", space+1);




problem2:
let arr= ["nishti", "seva", "om", "renu", "stack"];


let count_character=0;

for(let i=0; i<arr.length; i++){
  count_character= count_character+ arr[i].length
}

console.log(count_character);