problem1:
let yob= 1998;

let age= 2023-yob;

if((age>=13)&&(age<=19)){
  console.log("teenage");
}
else if((age>=20)&&(age<=29)){
  console.log("twenties");
}



problem2:
let character = "i";
if ((character=="a")||(character=="e")||(character=="i")||(character=="o")||(character=="u")){
  console.log("vowel");
}
else{
  console.log("nothing")
}




problem3:
let character = "a";
if ((character!="a")&&(character!="e")&&(character!="i")&&(character!="o")&&(character!="u")){
  console.log("consonant");
}
else{
  console.log("nothing")
}




problem4:
let a= 1;
let b= 3;
let c= 5;

//if ((a>b)&&(a>c)){
//  console.log("a is greater");
//}
//else if ((b>a)&&(b>c)){
//  console,log("b is greater");
//}
//else{
//  console.log("c is greater");
//}

(a>b && a>c)? console.log("a is greater") : (b>c && b>a)? console.log("b i s greater") : console.log("c is greater");


problem5:
let day = "Fri";

switch(day){
  case "Sun" : console.log("Sunday");
    break;
  case "Mon" : console.log("Monday");
    break;
  case "Tue" : console.log("Tuesday");
    break;
  case "Wed" : console.log("Wednesday");
    break;
  case "Thur" : console.log("Thursday");
    break;
  case "Fri" : console.log("Friday");
    break;
  case "Sat" : console.log("Saturday");
    break;
  default : console.log("input is wrong");

  
}