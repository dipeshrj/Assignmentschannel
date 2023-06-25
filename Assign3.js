// Let a=2,b=-3,c=5,d=10,e=9. Calculate
// a>b AND c<=d
// a+b<c OR d*a>=c
// (a**c===d AND d===e+a-1) OR d%e!==1
// 2^a+b>d OR c-d>b
let a = 2, b = -3, c = 5, d = 10, e = 9;
console.log(a>b);
console.log(c<=d);
console.log(a + b < c);
console.log(d * a >= c);
console.log((a**c===d && d===e+a-1) || d%e!==1);
console.log((2^(a+b))>d || c-d>b);


// Let isEarthRound= true, run NOT(!) operator on this. Print out: !isEarthRound.
let isEarthRound = true;
console.log(!isEarthRound);