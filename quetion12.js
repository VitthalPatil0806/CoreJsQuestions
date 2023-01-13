let d = new Date();
// year
console.log(d.getFullYear());
//month
console.log(d.getMonth());
//todays date
console.log(d.getDate());
//todays now hours
console.log(d.getHours());
//todays now minutes
console.log(d.getMinutes());
// number od second's from 1970
let ms = d.getTime();
let seconds = Math.round(ms/1000);
console.log("Seconds since epoch =",seconds);
