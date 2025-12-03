const marvel_heroes =["THor","Spider","caotain"]
const dc_heroes =["flash","superman","batman"];

// marvel_heroes.push(dc_heroes);
// push karne par pr dc_heroes as a array add ho rha marvel_heores mein

// console.log(marvel_heroes);

// const arr = marvel_heroes.concat(dc_heroes)
// // jab hm do ya do se jyada array concat karte hai toh uske liye hmlog ko ek new array chhiye
// // concaat karne se dc heroes ke element add honge marvel heroes mein

// console.log(arr);

// spread function
// const all_new_heroes =[...marvel_heroes, ...dc_heroes]
// // console.log(all_new_heroes);

// const another_array = [1,2,3,[4,5,6],7,[8,9]]
// const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

console.log((Array.isArray("BIPIN")));
console.log((Array.from("BIPIN")));
console.log((Array.from({name : "bipin"}))); // interesting case hai isme btana pdega li value ka array bnaan h yaa key ka


let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3));




