// const coding =["ruby","javascript","python","cpp"]

// // coding.forEach((key)=>{
// //     console.log(key);
    
// // })

// const myNums =[1,2,3,4,5,6,7,8,9,10]


// // filter bhi ek tarah ka backcalling function hotaa hai jo kuch return karta hai jb vo given condition ko satisfies karte haii
// // return jo karta hai vo new array ke form mein karta hai

// const num = myNums.filter( (num)=> num>4);
// console.log(num);

// const newNum =[]
// myNums.forEach((val)=>{
//     if (val>4) {
//         newNum.push(val);
//     }
// })
// console.log(newNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  //let userBooks = books.filter((val)=>(val.genre=='History'))
// console.log(userBooks);

let userBooks = books.filter((i)=>{
    return i.publish >1995 && i.genre==="History";
})
console.log(userBooks);