const clock =()=>{
const date  = new Date();
console.log(date.getMinutes());
const hourhand = document.querySelector('.hour-hand');
const minutehand = document.querySelector('.minute-hand');
const secondhand = document.querySelector('.second-hand');
const seconddegrees = (date.getSeconds()/60)*360 +90;
const minutedegrees = (date.getMinutes()/60)*360+90;
const hourdegrees =   (date.getHours()/12)*360+90;
minutehand.style.transform = `rotate(${minutedegrees}deg)`;
hourhand.style.transform =`rotate(${hourdegrees}deg)`;
secondhand.style.transform =`rotate(${seconddegrees}deg)`;
}
setInterval(clock,'1000');

