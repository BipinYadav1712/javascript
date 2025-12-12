const myObject ={
    cpp : "c++",
    js:'javascript',
    rb : 'ruby',
    swift : 'swift by apple'
}
for (const key in myObject) {
    
   // console.log(`${key} is shortcut for :=> ${myObject[key]}`);
     
}

const programming =["Js","ruby","c++","python"]

// for in loop ka keys seedhe index ki value utha kar deta hai  
// aur  vhi for of loop key print karane par seedhe index par jo value store hai vo deta hai 

for (const i in programming) {
   // console.log(programming[i]);   
}