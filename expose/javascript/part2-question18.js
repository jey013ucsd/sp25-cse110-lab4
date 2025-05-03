let d = new Date();
let time = d.toLocaleDateString();
console.log(time);

setInterval(function() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}, 1000);