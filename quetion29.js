//sum od even number
let sum1 = 0;
let sum2 = 0;
for(let i=0;i<=100;i++){
    if(i%2==0){
        sum1 = sum1+i;
    }
    else if(i%2==1){
        sum2 = sum2+i;
    }
}
console.log(sum1); 
console.log(sum2);

