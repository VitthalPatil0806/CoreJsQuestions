const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//sorted array
console.log('\n sorted array :',ages.sort());
//min & max
let m = Math.min(...ages);
let m1 = Math.max(...ages);
console.log('\n min element from array is:',m)
console.log('\n maximum element from array is:',m1);
//median 
let x = ages.length/2;
console.log('\n median of array ages is:',x);
// Avarage value finding
y = ages.length;
let sum=0;
let avg;
for(let num of ages){
    sum = sum+num;
}
avg = sum/ages.length;
console.log('\n Average number od array ages is:',avg);
console.log('\n Range of array ages is:', + m1-m);
//abs() method for comparison
compare1 = Math.abs(m-avg);
console.log('\n min value comparison',compare1);
compre2 = Math.abs(m1-avg);
console.log('\n max value comparison',compre2);