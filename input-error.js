function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const firstTotal = add(63, 67);
// console.log(firstTotal);
const secondTotal = add(54, 981);
// console.log(secondTotal);
const thirdTotal = add(12, 14);
console.log(thirdTotal);

function multiply(num1, num2) {
    console.log('parameters', num1, num2);
    const result = num1 * num2;
    return result;
}

const firstResult = multiply(13, 12);
console.log(firstResult);