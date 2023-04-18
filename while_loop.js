problem1:
let number = 10;
while(number<=20){
  console.log(number);
  number++;
}



problem2:
let a=0;
while(a<=5){
  if(a%3==0){
    console.log(a);
  }
  a++;
}



problem3:
let i= 0;
let sum=0;

while(i<=6){
  if(i%3==0){
    
    sum=sum+i;
  }
  i++;
}
console.log(sum);



problem4:
let sum=0;
let count=0;
for(let i=1; i<=100; i++){
  sum=sum+i;
  count++
}
console.log(sum/count)
