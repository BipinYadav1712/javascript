// +++++++++ this And arrow function +++++++++++

const user = {
    username : "BIPIN YADAV",
    userID: "046",
    Course: "B.tech",
    welcomeMessage: function(){
        console.log(`${this.username} , welcome t0 website`);  
    // console.log(this);
    } 
    
}
// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()
// console.log(this);


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai() // function ke andar hmlog this keyword ka use nhii kar sakte haiii

// const chai =function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai() 

const chai = () =>{
    let username = "hitesh"
    console.log(this);
}
// chai() 

// const add = (num1,num2)=>{
// return num1+num2
// }
// console.log(add(3,4));

const addTwo =(num1,num2)=> (num1+num2 )

 
console.log(addTwo(3,4))
