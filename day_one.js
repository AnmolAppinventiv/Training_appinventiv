//Task 1  LET VAR CONST

let a=0;
// console.log(a);
// console.log(h);
var h=5;


function varrr(){
    for(var i=0;i<4;i++){
        setTimeout(function() {
            // console.log(i);
        }, i*1000);
    }
}
varrr();


function lettttttt(){
    for(let i=0;i<5;i++){
        setTimeout(() => {
            // console.log(i);
        }, i*1000);
    }
}
lettttttt();

const arr=['anmol','aneja'];
arr[1]='anmol';
console.log(arr); // can change non primitive data-type

const b=10;
//b=29, cant reassign variable




// =================================================

// TASK 2: Array 

// 1) Join
    // join or join(seperator)
const mountains=['moun1','moun2','moun3'];
// console.log(mountains.join(';'));

// 2) SLICE 
const cu=['anmol','aneja','mohit','sanjeev','shefali'];
// let newCU=cu.slice();
// console.log(newCU);
// console.log(cu);



//3) Splice 
const months=['jan','feb','march','april','may','june'];
months.splice(7,0,'anmol');
console.log(months);


// 4) Sort

const appinventive=['taman','anish','anmol','ceo'];
//console.log(appinventive.toSorted());//used toSorted
// console.log(appinventive);// orignal array change ni hua 
// console.log(appinventive.sort()); //orignal array mai change hogya
// console.log(appinventive);
// console.log(appinventive[0]);

// 5)  Map 

const surname=[1,2,3];
const map1=surname.map((str)=>str*4);
console.log(map1);
console.log(map1.map(parseInt));
//4,8,12
//0,1,2

//6) Length
surname.length=10;
console.log(surname.length);

//7) push -> end mai element daalta hai aur array ki length return krdeta h

const random=[1,2,3,4,5,6];
console.log(random.push(10));
console.log(random);

// 8) concat method
const name1 = ["Anish","Manish","Taman","Anmol"];
const name2 = ["anmol","anmol4","anmol3","anmol2"];
const num1 = [[1],[2,3]];
const num2 = [4,5,6];
const name3 = name1.concat(name2);      // concat return a new array
const num3 = num1.concat(num2);
// console.log(name3);
// console.log(num3);              // [[1],[2,3],4,5,6]

//9) filter method
const marks = [90,88,79,92,54,78,55,78];
const filterMarks = marks.filter( (i) => {
    return i>80;
} )
// console.log(filterMarks);

//10) pop
const anmol=[];
console.log(anmol.pop());

//11) reverse
const numbersss=[1,2,3,4,5,6,7];
console.log(numbersss.reverse());

// TASK 3: 
//for looop

for(let i=0;i<10;i++){
    // console.log(i);
} 

//do while
//sum of first 5 natural numbers
let result = 0;
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);


// WHILE LOOP 
let n=1;
let res=0;
while(n<=5){
    res=res +(n*(n+1))/2;
    n++;
    if(n === 6) {
        break;
    }
}
console.log(res);

// TASK 4: Conditional Statements
//IF-ELSE
let varname="anmol";
if(varname === "aneja"){
    console.log("MATCHED");
}else{
    console.log("NOT MATCHED");
}

//IF-ELSE IF-ELSE
let numi=10.01;
if(numi===10){
    console.log("NUMBER IS SAME");    
}else if(numi>10){
    console.log("NUMBER IS GREATER THAN 10");
}else{
    console.log("NUMBER IS LESS THAN 10");
}


//switch

function getWeekday( dayNumber ){
    let dayName="";

    switch(dayNumber){
        case 1:
            dayName="Monday";
            break;
        case 2: 
            dayName="TUESDAY";
                break;
        case 3:
              dayName="Wednesday"; 
              break; 
        case 4:
             dayName="Thursday";
             break;
        case 5: 
            dayName="Friday";
            break;
        case 6: 
            dayName="Saturday";
            break;
        case 7:
            dayName="Sunday";
            break;
        default:
            dayName="Invalid dayNumber !"                             
    }
    return dayName;
}

console.log(getWeekday(2));
console.log(getWeekday(4));


//ternary operator
function voidd(){
    let num=10;
    let str= (num>11)? "Yes" : "no";
    return str;
}
console.log(voidd());


