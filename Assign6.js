// Write a function that checks if the provided number is odd or even.
const oddEven=(num)=>{
    if(num % 2 == 0){
        console.log(`${num} is even`)
    }
    else{
        console.log(`${num} is odd`)
    }
}
oddEven(-2)


// Write a function that takes a number and prints value from 0 to that number (use while loop).
let i = 0, n=6
while(i<=n){
    console.log(i)
    i++
}

// Write a function that takes “add”/“subtract”/”multiply”/”divide” and two numbers as parameters and perform appropriate operations.
const calculate=(operate,n1,n2)=>{
if(operate==="add"){
    sum=n1+n2
    console.log(`Sum is:${sum}`)
}
else if(operate==="subtract"){
    diff=n1-n2
    console.log(`Difference is :${diff}`)
}
else if(operate==="multiply"){
    prod=n1*n2
    console.log(`Product is :${prod}`)
}
else if(operate==="divide"){
    quotient=n1/n2
    console.log(`Quotient is: ${quotient}`)
}
}
calculate("divide",12,6)

// Write a function that takes day of week as parameter and returns 1,2,3,4,5,6. Example.. Provided sunday should return 1,monday returns 2
const week=(day)=>{
    if(day==="Sunday"){
        console.log(1)
    }
    else if(day==="Monday"){
        console.log(2)
    }
    else if(day==="Tuesday"){
        console.log(3)
    }
    else if(day==="Wednesday"){
        console.log(4)
    }
    else if(day==="Thursday"){
        console.log(5)
    }else if(day==="Friday"){
        console.log(6)
    }else if(day==="Saturday"){
        console.log(7)
    }
}
week("Sunday")

// Write a function that takes 10 numbers and calculates the average of the provided numbers.
const average=(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)=>{
avg= (a1+a2+a3+a4+a5+a6+a7+a8+a9+a10)/10
return avg
}
avg=average(2,4,6,8,10,12,14,26,18,20)
console.log(avg)

// Write a function that takes a number as a parameter and returns a sum from 0 to that number. E.g if number is 5 then function should return 0+1+2+3+4+5=15
let s=0
const sum=(n)=>{
    for(i=0;i<=n;i++){
        s=s+i
    }
    return s
}
s = sum(5)
console.log(s)

// WAF that converts dollars into cents.
const convert=(dollar)=>{
cents = dollar*100
return cents
}
cents=convert(15)
console.log(cents)

// WAF that converts temperature in Celsius into Fahrenheit.

// WAF that calculates the factorial of a number.
let f=1
const fact=(n)=>{
    for(i=1;i<=n;i++){
        f=f*i
    }
    return f
}
f = fact(4)
console.log(f)