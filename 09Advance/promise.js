// promise is one of the 3 states 
// pending: initial state neither fullfilled niether rejected
// fullfilled : that the operation is fully completed
// rejected : that the operation is failed 

// const promiseOne = new Promise(function(resolve,reject){
//     // performs async tasks
//     // database calling ,cryptography ,network
//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve();
//     },2000)
// })
// promiseOne.then(function(){
//     console.log("Promise consumed");
    
// })

// // another way to call promise 

//  new Promise(function(resolve,reject){
//     // performs async tasks
//     // database calling ,cryptography ,network
//     setTimeout(function(){
//         console.log("Async task is completed 2");
//         resolve();
//     },2000)
// }).then(function(){
//     console.log("Promise consumed 2");
    
// })

// // promisefour
// const PromiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("thik hai sab badhiya ");
        
//     },1000);
//     resolve({username: "BIPIN" , email: "Bipinyadav1712@gmail.com"})
// })
// PromiseFour.then(function(user){
//     console.log(user);
    
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

