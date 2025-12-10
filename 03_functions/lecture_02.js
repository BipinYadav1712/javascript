// shopping cart se related kuch functions 
 function calculateCartPrice(val1,val2, ...num1){
    return num1;
 }
//  console.log(calculateCartPrice(2));
//  console.log(calculateCartPrice(200,400,500));
//  console.log(calculateCartPrice(200,400,500,1000,4000));
 // yaha dikkat ye ho rha ki saari values nhi aa rhii isiliye hamlog rest aur spread operator ka use karte haiii

 const user ={
    username: "Bipin",
    price: 199
 }

 function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
 }

//  handleObject(user); // yaha paramter mein hmlog object pass kar rhe haii
 
// hamlog aise bhi function mein object paas kar sakte haii
handleObject({
    username: "BIPIN YADAV",
    price : 299,
 })

const myNewArray =[100,200,300,400,500,600,700,800,900,1000]
function returnSecondValue(getArray){
    return getArray[5];
}

console.log(returnSecondValue(myNewArray));
