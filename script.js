const HOURHAND = document.getElementById("hour");
const MINUTEHAND = document.getElementById("minute");
const SECONDHAND = document.getElementById("second");



var date = new Date();
console.log(date)

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();


let hrPosition = 20;
let minPosition = min * 360 / 60;;
let secPosition = sec * 360 / 60;

HOURHAND.style.transform = "rotate(" + hrPosition + "deg )";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg )";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg )";


