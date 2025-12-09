function SaymyName(){
    console.log("B");
    console.log("I");
    console.log("P");
    console.log("I");
    console.log("N");
}
// SaymyName()

// function addition(number1 , number2){
//     // yaha number1 , number2 ye dono arguments hote hai jo ki functions mein pass kiye jaate haii ise parameter bhi kehte hai

//     console.log(number1 + number2); 
// }

// addition(3,9) output hai iska 12
// addition(3,"4") iska 34
// addition(3,null)// yaha null parameter haiii aur iska output 3   

function addition(number1, number2){
    // let result = number1 + number2;
    // return result;
    
    return number1 + number2;
    
}
// const result = addition(5,9);
// console.log("Result : - " , result);

//+++++++++++++ dusra function with if else ++++++++++
function IsloggedIn(username = "Bipin"){
    if(username === undefined){
        console.log(" please enter the userName");
        return;
    }
    return `${username}  just logged in system`;
}
console.log(IsloggedIn("Hitesh"));
console.log(IsloggedIn());

