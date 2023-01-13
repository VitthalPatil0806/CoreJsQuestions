// follow four.html
function bmi (){
    let w = prompt("enter your weight in kg");
    let m2 = prompt("enter your height in meter");
    let h = m2*m2;
    let b = w/h;
    prompt("your bmi is :",b);

    if(b<18.5){
        prompt("you are underweight",b);
    }
    else if(b>=18.5 && b<=24.9){
        prompt("you are normal",b);
    }
    else if(b>=25 && b<=29.9){
        prompt("you are overweight",b);
    }
    else if(b>30){
        prompt("obese",b);
    }
    else{
        prompt("give proper input");
    }

}
bmi();

