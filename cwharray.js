// let num = [1,2,4,5,6];
// let r = num.push(32);
// console.log(num,r);
// r returns new length of the array


// let num1 = [1,2,4,5,6];
// let r1 =num1.pop();
// console.log(num1,r1);

// let num = [1,2,3,4,5,6,7,8,9]
// console.log(num.length);
// delete num[0];
// console.log(num.length);

// sort methods
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// num.sort();
// console.log(num);  //Alphabetically sort 



// // sort Method
// let compare = (a, b) => { 
//     return b-a;
// }
// let num1 = [551, 22, 3, 13, 5, 6, 7, 8, 229]
// num.sort(compare);
// console.log(num);    // sort by desceding order


// splice and slice
// let num = [551,22,3,14,5,6,7,8,229]
// let deletedvalues=num.splice(2,4,1023,1024,1025,1026);
// console.log(num);
// console.log(deletedvalues);

// slice
let num = [551,22,3,14,5,6,7,8,229];
let newNum = num.slice(3,8);
console.log(newNum);
