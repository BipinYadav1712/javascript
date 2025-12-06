// yaha object ke baarein mein aur janege hamlog
// singleton ke baarein mein baat krenge hamlog
//const tinderApp = new Object() // ye singleton object hai
const tinderApp = {} // non singleton object hai

tinderApp.id = "123abc"
tinderApp.name = "Bipin"
tinderApp.isloggedIn = false;
// console.log(tinderApp);


const regularUser ={

    email : "Bipinyadav1712@gmail.com",
    PhoneNumber: "911XX948473",
    fullName: {
        // yaha hmlog object ki nesting kiye jaa rhe haiii
        userFullName :{
            firstname :"Bipin",
            LastName : "Yadav"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstname);

const obj1 ={
    email: "yadav@gamil.com",
    name :"Bipin",
    college: "JSSATEN, NOIDA",
    address : "Gorakhpur",
}
const obj2 ={
    email1: "yadav@gamil.com",
    name2 :"Bipin",
    college3: "JSSATEN, NOIDA",
    address4 : "Gorakhpur",
}
// const obj3 = { obj1 ,obj2};
//const obj3 = Object.assign({},obj1,obj2);
// assign ka use karke hmlog kisi 2 ya do se jyada object ko kisi naye object ko un sab ki values assign kar skte hai

// ab hmlog easy method use karenge {spread wala} 
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// jab database se value aayegi tab vo array of objects ke form mein aati hai

const users = [

    {
       id :1,
       email : "bipinyadv@gmail.com",
    },

    {
       id :1,
       email : "bipinyadv@gmail.com",
    },

    {
       id :1,
       email : "bipinyadv@gmail.com",
    },

    {
       id :1,
       email : "bipinyadv@gmail.com",
    },
]
// console.log((users[1].email));
// console.log(tinderApp);

// console.log(Object.keys(tinderApp));
// console.log(Object.values(tinderApp));
// console.log(Object.entries(tinderApp));

console.log(tinderApp.hasOwnProperty('isloggedIn'));



