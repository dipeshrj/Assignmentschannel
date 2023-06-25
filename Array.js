const priceList=[100000,20000,30000,60000,70000];
// map
const newArray = priceList.map((item,index,array)=>{
    return item/100
})
console.log(newArray)

// filter
const filtered= priceList.filter((item,index,array)=>{
   if( item>40000){
    return item
   }
})
console.log(filtered)

// find
const found= priceList.find((item,index,array)=>{
    if(item===100000){
        return item
    }
})
console.log(found)

// slice
console.log(priceList.slice(0,2))

// splice
priceList.splice(2,0,80000)
console.log(priceList)

// every
const hell= priceList.every((item,index,array)=>{
    return item>10000
})
console.log(hell)

// fill
console.log(priceList.fill(2500,2,5))

// some
const someItem= priceList.some((item,index,array)=>{
    return item=2500
})
console.log(someItem)

// findIndex
const index= priceList.findIndex((item,index,array)=>{
    return item===2500
})
console.log(index)

// sort
const sorted= priceList.sort((a,b,index,array)=>{
    return a-b
})
console.log(sorted)

// reverse
console.log(sorted.reverse())