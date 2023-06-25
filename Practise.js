// const laptopBrands=["Dell","Asus","Acer","Hp"];

// laptopBrands.map((item,index,array)=>{
//     console.log(item)});

// laptopBrands.filter((item,index,array)=>{
//     if(item=="hp")
// console.log(item)
// })
 
// console.log(laptopBrands.slice(0,2));

// laptopBrands.splice(3,0,"Lenovo")
// console.log(laptopBrands);

// console.log(laptopBrands.sort());

// console.log(laptopBrands.reverse());

// console.log(laptopBrands.fill("Hello",2,4));

// const price=[1,2,3,6,7];
// let sum=0;
// price.forEach((item,index,array)=>{
//     sum= sum+item
// })
// console.log(sum)

// price.map((item,index,array)=>{
//     sum= sum+item
// })
// console.log(sum)

// forof

// for(let item of price){
//     console.log(item)
// }

// const price=[1,2,3,6,7];
// const total= price.reduce((sum,item,index,array)=>
//     sum*item,1)
// console.log(total)


// closure = functon + lexical environment
let firstName="Sujit"
const sayHi =()=>{
    console.log(`Hi ${firstName}`)
}
firstName="Shrutee"
sayHi()


const getFullName=(firstName,lastName)=>{
let fullName = `${firstName} ${lastName}`

const sayHi=()=>{
    console.log(`Hi ${firstName}`)
}
sayHi()
return fullName
}

getFullName("Dipesh","Rabanshi")

// nested function
const getSum=(x,y)=>{
    const sum=()=>{
        let s =x+y
        return s
    }
    const sum0=sum() 
    return sum0
}
const sum1=getSum(3,8)
console.log(`Sum is : ${sum1}`)

//
const getRemainder=(x,y)=>{
    const showNumbers=()=>{
        console.log(`x is ${x} and y is ${y}`)
    }
    showNumbers()
    let remainder = x % y ;
    return remainder;
}
const result= getRemainder(3,4)
console.log(`Remainder is ${result}`)


// typecheck
const checkType=(a,b)=>{
    if(typeof a !=="number"){
        a=0
    }
    console.log(a)
    if(typeof b !=="number"){
        b=0
    }
    console.log(b)
}
checkType("Hello",8)


// validaton of number
const newFunction=(n1,n2)=>{
    const validate=(num)=>{
        if( num < 0){
            return 0
        }
        else{
            return num
        }
    }
    a1= validate(n1)
    a2= validate(n2)  
    console.log(a1,a2)  
    let remainder1= a1 + a2
    return remainder1
   
}
let out=newFunction(5,-3)
console.log(out)


const calculteSum=(x1,y1)=>{
    return ()=>{
let Sum= x1+y1
return Sum
    }
}
result1= calculteSum(5,3)
console.log(result1())