function getDaysInMonth(year, month){
    return new Date(year, month,0).getDate();
}
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;

// normal year
let days = getDaysInMonth(2023,1);
console.log(days);
//leap year
let day = getDaysInMonth(2024,2);
console.log(day);