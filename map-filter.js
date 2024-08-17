const numbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// const result = numbers.map(function(element){
//     return element * element;
// })

const result = numbers.map(x => x * x );
console.log(result);

const bigger = numbers.filter(x => x > 5);
const isthere = numbers.find(x => x > 5);
console.log(bigger);
console.log(isthere);

