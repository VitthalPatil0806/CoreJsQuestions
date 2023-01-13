// dispalying different date using different format's
let date = new Date;
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
let format1 = year + "-" + month + "-" + day + "  " + hour + ":" + minute;
let format2 = day + "-" + month + "-" + year + "  " + hour + ":" + minute;
let format3 = day + "/" + month + "/" + year + "  " + hour + ":" + minute;
console.log('\n The date in YYYY-MM-DD HH:mm format is' ,format1);
console.log('\n The date in DD-MM-YYYY HH:mm format is',format2);
console.log('\n The date in DD/MM/YYYY HH:mm format is',format3);