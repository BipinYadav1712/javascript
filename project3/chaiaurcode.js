const time = document.getElementById('clock')

// set interval kisi function ko baar baar run karwat haiii

setInterval(function(){
let date = new Date()
//console.log();
time.innerHTML = date.toLocaleTimeString();
},1000)