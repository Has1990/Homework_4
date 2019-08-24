// Task 1

function getFibonachi(result){
    let a = 0;
    let b = 1;
    result = b;
    for (let i = 0; i <= 100; i++){
        result = a + b;
        a = b;
        b = result;
        console.log(result);
    }
}
getFibonachi(8);


// Task 2

function getTwoDigit(n) {

    let points = new Array(99);
    for (let i = 0; i < 99; i++) {
        points[i] = i + 1;
    }

    for (let i = 0; i < points.length; i++) {
        if(points[i] < 10){
         points[i] = "0" + points[i];
        }
        console.log(points[i]);
    }
}
getTwoDigit();


// Task 3


function getCount(number) {


    let product = 1;
    let sum = 0;

    while(number !== 0) {
        product = product * (number % 10);
        sum = sum + (number % 10);
        number = Math.floor(number / 10);
    }

    if (product % sum === 0) {
        console.log("Quotient is " + (product / sum));
    } else {
        console.log("Reminder is " + (product % sum));
    }
}
getCount(30);

// Task 4

function getDifferenceOfMaxMin(array) {
    let max = 0;
    let min = 0;
    let difference;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];

        } else {
            min = array[i]
        }
    }

    difference = max - min;

    for (let j = 0; j < array.length; j++) {
        if (array[j] === difference) {
            console.log(true)
        } else {
            console.log(false);
        }
    }
}

getDifferenceOfMaxMin([111, 20, 7, 105, 6]);
