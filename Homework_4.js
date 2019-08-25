// Task 1

function getFibonachi(arr) {

    let result = [0, 1, 1]
    for (let i = 3; i <= arr; i++) {

        let prev = result[i - 1];
        let next = result[i - 2];


        while (prev + next <= arr) {
            result.push(prev + next);
            console.log(result);
        }
        break;

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
            let num = parseInt("0");
            points[i] = num + points[i];
        }

        console.log(points[i]);
    }
}
getTwoDigit();


// Task 3

function getCount(number) {


    let product = 1;
    let sum = 0;
    if (number <= 0) {
        number = Math.abs(number);
    }


    while (number !== 0) {
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

getCount(-30);

// Task 4

function getDifferenceOfMaxMin(array) {
    let max = array[0];
    let min = array[0];
    let difference;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];

        } else {
            min = array[i]
        }
    }

    difference = max - min;


    if (array.includes(difference)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

getDifferenceOfMaxMin([111, 20, 7, 105, 6]);
