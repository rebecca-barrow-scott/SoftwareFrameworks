//task one
console.log("Task 1.1: Hello World, Node.js!");
console.log("\n")

//task two
let taskList = [1, 2, 3, 4, 5];
console.log("Task 2.1: " + taskList);
taskList.push(6);
console.log("Task 2.2: " + taskList);
taskList.unshift(0);
console.log("Task 2.3: " + taskList);
taskList.splice(3, 0, 2.5);
console.log("Task 2.4: " + taskList);
taskList.pop();
console.log("Task 2.5: " + taskList);
taskList.splice(1,1);
console.log("Task 2.6: " + taskList);
taskList[4] = 100;
console.log("Task 2.7: " + taskList);
taskList.sort((a,b)=>a-b)
console.log("Task 2.8: " + taskList);

//task 3
let taskObj = { 
    'people': [
        {'firstName':'rebecca', 'lastName':'scott'}, 
        {'firstName':'lucy', 'lastName':'scott'},
        {'firstName':'hannah', 'lastName':'scott'}
    ]};
console.log("\nTask 3.1")
console.log(taskObj.people);
let taskObjStr = JSON.stringify(taskObj);
console.log("\nTask 3.2")
console.log(taskObjStr);
let taskObj2 = JSON.parse(taskObjStr);
console.log("\nTask 3.3")
console.log(taskObj2);

//task 4
const arrayAdd = require('array-add-num');
console.log("\nTask 4.1: Sum of Array is " + arrayAdd([5,4,3,8]));

//task 5
function multiplyNums(x, y, z){
    return "new number is " + x * y * z;
    }
let multiplyNumsExp = function(x, y, z){
    return "new number is " + x * y * z; 
};
let multipleNumsArrow = (x, y, z) => "new number is " + x * y * z;

let a = 2;
let b = 4;
let c = 6;
let orig = multiplyNums(a, b, c);
let exp = multiplyNumsExp(a, b, c);
let arrow = multipleNumsArrow(a, b, c);

console.log("\nTask 5.1")
console.log("Result of the declarative function: " + orig)
console.log("Result of the function expression:  " + exp)
console.log("Result of the arrow function:       " + arrow)