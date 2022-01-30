// celcius to farenheit:
function cToF(celcious){
    farenheit = ((9 * celcious) + 160) / 5;
    return 'your converted output : ' + farenheit + 'F';
}

let myInput = cToF(33);
console.log(myInput);


// farenheit to celcious:
function fToC(farenheit){
    celcious = (((5 * farenheit) - 160) / 9).toFixed(3);
    return 'your converted output : ' + celcious + 'C';
}

let myInput2 = fToC(101);
console.log(myInput2);


// Grade calculation Bangladesh:
function gradeChecker(number){
    if (number >= 80 && number <= 100){
        return 'Your number is : ' + number + ', You Got A+';
    }
    else if (number >= 70 && number <= 79){
        return 'Your number is : ' + number + ', You Got A';
    }
    else if (number >= 60 && number <= 69){
        return 'Your number is : ' + number + ', You Got A-';
    }
    else if (number >= 50 && number <= 59){
        return 'Your number is : ' + number + ', You Got B';
    }
    else if (number >= 40 && number <= 49){
        return 'Your number is : ' + number + ', You Got C';
    }
    else if (number >= 33 && number <= 39){
        return 'Your number is : ' + number + ', You Got D';
    }
    else{
        return 'Your number is : ' + number + ', Sorry you do not pass the exam';
    }
}

myScore = 79;
let checkMyScore = gradeChecker(myScore);
console.log(checkMyScore);


// factorial using for loop and function:
function factorialCount(number){
    x = 1;
    for (i = 1; i <= number; i++){
        x = x * i;
    }
    return x;
}
myNumber = 6;
checkFactorial = factorialCount(myNumber);
console.log(checkFactorial);


// factorial using while loop and function:
function factorialCount(number){
    x = 1;
    var i = 1;
    while (i <= number){
        x = x * i;
        i++;
    }
    return x;
}

myNumber = 5;
checkFactorial = factorialCount(myNumber);
console.log(checkFactorial);

