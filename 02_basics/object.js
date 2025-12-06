// singleton
// Object.create

//object literals
const mysym = Symbol("key1")

const Jsuser ={
    name: "Bipin",
    age: 18,
    [mysym]: "mykey1", // yaha pr [] iske andr hmlog ko symbol likhna h vrna vo as a string paas hoga 

    location: "Gorakhpur",
    email: "bipinyadav1712@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
       
}
// methods to acccess object

// console.log(Jsuser["email"]);
// console.log(Jsuser[mysym]);

// Jsuser.email ="helobabu@gmail.com";
// Object.freeze(Jsuser); iska use hamlog isiliye kiye kyuki agr hm chah rhe i koi value change na ho object ki toh object ko freeze kar denge hmlog


// Jsuser.email ="helobab12344u@gmail.com";
// console.log(Jsuser);

Jsuser.greetingOne = function(){
    console.log("hello jsuser kaise ho aap :-");
    
}
Jsuser.greetingTwo =function(){
    console.log(`hello js user, ${this.name} aur aapka email-id hai ${this.email}`);
}  
console.log(Jsuser.greetingOne());
console.log(Jsuser.greetingTwo());

