// ARRAYYYYYYYY

const myArr = [0,1,2,3,4,5,6,7,8,9] 
// console.log(myArr);

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(5));
console.log("A",myArr);

// slice ka use  main array mein kuch change nii karta hai
 
const myn1 = myArr.slice(1,3)
console.log(myn1);

//splice ka use krne par main array mein chages dikh jaate hai utne range ke elements remove ho jaata hai

console.log("B",myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log(myArr);



 