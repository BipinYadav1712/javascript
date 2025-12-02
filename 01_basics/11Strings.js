// const name = "Hitesh"
// const repoCount =50
// // console.log(name + " "+ repoCount);
// // string interpolation
// console.log(`Hello my name is ${name} and my marks is ${repoCount}`);


// const gameName = new String('BIPINHC')
// console.log(gameName);
// console.log(gameName.length);
// console.log(gameName.charAt(3));
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('P'));

// const newString = gameName.substring(0,5);
// console.log(newString);

// const anotherName = gameName.slice(0,-5);
// console.log(anotherName);

// const newString = " Hitesh  "
// console.log(newString);
// console.log(newString.trim());
// // trim ka use karke hmlog both ends se whitespaces remove karte hai
// // trimStart or trimEnd bhi hota hai

// const url = "https://hitesh.com/hitesh%20chaudhary"
// console.log(url.replace('%20','-'))
// console.log(url.includes("bipin"))

const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

