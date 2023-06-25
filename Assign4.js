// 1.Check if a number is odd or even. 
let n = 10;
if(n%2 === 0){
    console.log("Even");
}
else{
    console.log("Odd")
}

// 2.Check if input variable is a number or not 
let a = 28;
console.log("Is 'a' a number? "+Number.isInteger(a))

// 3.Find the largest of two numbers. 
let b=10, c=20;
if(b>c){
    console.log(b+" is greater than "+c)
}
else{
    console.log(c+" is greater than "+b)
}

// 4.Find the largest of three numbers. 
let d=30, e=40, f=50;
if(d>e && d>f){
    console.log(d+" is greater than "+e+" and "+f)
}
else if(e>d && e>f){
    console.log(e+" is greater than "+d+" and "+f)
}
else{
    console.log(f+" is greater than "+d+" and "+e)
}

// 5.Perform arithmetic operation based on the option provided. Set two variables with numbers.
//  Create another variable called “option” which can be add/subtract/multiply/divide/power. 
// Based upon the value of the option. Perform appropriate operation. 
// e.g. if option is “add”, perform num1+num2 
let g= 10, h=5;
let option= "power";
if(option=="add"){
    console.log("Sum: "+(g+h));
}
else if(option=="subtract"){
    console.log("Difference: "+(g-h));
}
else if(option=="multiply"){
    console.log("Product: "+(g*h));
}
else if(option=="divide"){
    console.log("Quotient: "+(g/h));
}
else if(option=="power"){
    console.log("Power: "+(g**h));
}

// 6.Find grades for student marks. 
// If the mark is greater than or equal to 90, the grade is “A plus”.
// If the mark is greater than or equal to 80,the grade is “A”.
//  Grade “B”  from marks greater than equal to 70.
// “C” for marks greater than equal to 60.  
// “F” for marks  less than 60.
let marks = 100;
if(marks >= 90 && marks<=100){
    console.log("A+")
}
else if(marks >= 80 && marks<90){
    console.log("A")
}
else if(marks >= 70 && marks<80){
    console.log("B")
}
else if(marks >= 60 && marks<70){
    console.log("C")
}
else if(marks >= 0 && marks<60){
    console.log("F")
}

