// // Write a JS code to print numbers from 0 to 10 
// for(i=0;i<=10;i++){
//     console.log(i)
// }
 
// // WAP to print the numbers from 12 to 24 
// for(i=12;i<=24;i++){
//     console.log(i)
// }
 
// WAP to add numbers from 0 to n using for loop and while loop. 
let n=10, sum=0, sum1=0;
for(i=0;i<=n;i++){  //using for loop
    sum = sum +i;
}
console.log(sum)
let j=0;

while(j<=n){    //using while loop
    sum1=sum1 +j;
    j++;
}
console.log(sum1)
 
// Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even and displays a message on the screen. 
// Sample Output : 
// "0 is even" 
// "1 is odd" 
// "2 is even" 
 for(i=0;i<16;i++){
    if(i%2==0){
        console.log(i+" is even")
    }
    else{
        console.log(i+" is odd")
    }
 }

// Write a JS code to calculate the sum of digits in a number 
let n1 = 123, sum2=0;
for(i=0;i<3;i++){
    sum2= sum2 + n1%10;
    n1=parseInt(n1/10);
}
console.log(sum2)


