// Create an array called friendsList and add your friends name. Print out your friend's name one by one.

const friendlist = ["Oggy","Tom","Jerry"];
friendlist.map((item,index,array)=>console.log(item))



// Create an array  favourite sportsPerson and use a for loop to print the player's name.

const favsportsperson = ["Sukdev","theGreekGod","Biswa"];
for(i=0;i<favsportsperson.length;i++){
    console.log(favsportsperson[i])}

// Create an array called myFavourite actors and print out who is your best actor among all actors.

const myfavsctors=["Jackie","Dwayne","DocStrange","Robert"];
console.log("My favourite actor is:"+myfavsctors[3])

// Make an array of numbers that double the items.

const num=[1,2,3,4,5];
const double= num.map((item,index,array)=>{
    return item*2
})
console.log(double)



// Make an array of numbers and print whether the numbers are odd or even.

const numbers= [ 2,3,5,6,8];
numbers.map((item,index,array)=>{
    if(item%2===0){
        console.log(item+":Even") 
    }
    else{
        console.log(item+":Odd") 
    }
})
