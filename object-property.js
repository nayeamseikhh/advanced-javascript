const students = [
    {id: 21, name: "hasan ali"},
    {id: 25, name: "zakir ali"},
    {id: 26, name: "nayeam seikh"},
    {id: 27, name: "rajib ali"},
    {id: 28, name: "sogib ali"},
];
const allName = [];

// for (let i = 0; i < students.length; i++) {
//     let element = students[i];
//     const results = element.name;  // main order is here
//     allName.push(results);
// }
// console.log(allName);

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>26);
const bigger1 = students.find(s => s.id>25);
console.log(names);
console.log(ids);
console.log(bigger);
console.log(bigger1);