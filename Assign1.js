// 1.Store your current age,name,college/workplace name into  variables.
// Output the result like “My name is Nischal and I am 20 years old. I am an IT student at broadway.”

const name = "Dipesh Rajbanshi" ;
const age = 23;
const college = "Mechi Multiple Campus";
console.log("My name is "+name+" and I am "+age+" years old. I am an IT studnet in "+ college)



// 2.Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be an engineer in Kathmandu, and married to Asmita with 2 kids."

const noc = 2;
const wife = "Asmita";
const location = "Kathmandu";
const job = "engineer";
console.log("You will be an "+job+" in "+location+", and married to "+wife+" with "+noc+" kids")



// 3.Store a radius into a variable. Calculate the circumference based on the radius.Circumference of circle = 2*Pi*r

const r = 10;
const Pi = 3.14;
const circum = 2 * Pi * r;
console.log(circum)

// 4.Write a JavaScript program to convert temperatures from celsius to fahrenheit. Formula:C = (5/9) * (F - 32)

const c = 37;
const farenheit = (9 * c) / 5 +32;
console.log(farenheit);

// 5.Calculate expression:
// 3x-2y+2xy
// (x+y)2-1
// (x^3+y^2)/3
// x mod y
// Such that x =3 and y=2

const x = 3;
const y = 2;
const a = 3 * x - 2 * y - 1;
const b = (x + y)* 2 - 1;
const d =  (x ^ 3 + y ^ 2) / 3;
const e = x % y;
console.log(a);
console.log(b);
console.log(d);
console.log(e);
