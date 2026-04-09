const randomColor = () =>{
let hex = '0123456789ABCDEF';
let color ='#';
for(let i =0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)];
}
return color;
};
let intervalId;

const startChanging = () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 500);
    }
};

const stopChanging = () => {
    clearInterval(intervalId);
    intervalId = null; // important
};

document.getElementById('start').addEventListener('click', startChanging);
document.getElementById('stop').addEventListener('click', stopChanging);