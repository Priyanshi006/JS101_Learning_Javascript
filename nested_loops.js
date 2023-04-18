problem 1:
let d=0;
for(let month=1; month<=12;month++){

  if(month==2){
    d=28;
  }
  else if(month==4 || month== 6 || month ==9 || month ==11){
    d=30;
  }
  else{
    d=31
  }

  for(let day=1;day<=d;day++){
    console.log(day+ "-"+month);
  }
}




problem2:
for(let i=1; i<=10;i++){

  let number =i
let factor=0
for(let i=1; i<=number;i++){

  if(number%i==0){
    factor++;
  }
}

if(factor==2){
  console.log(number,"is a prime number");
}
else{
  console.log(number,"is not a prime number");
}
}



problem 3:
for(let horizontal=1; horizontal<=10;horizontal++){
  let a= "";
  for(let vertical=1; vertical<=10;vertical++){
    if(horizontal==1 || horizontal==10){
      a= a+"*";
    }
    else if( vertical==1 || vertical==10){
      a= a+ "*";
    }
    else{
      a= a+ " ";
    }
  }
  console.log(a);
}