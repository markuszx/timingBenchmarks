const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code
  console.time("default", "start")
  // Your code here
  let added =[];
  let num =0;
  for(let i =0; i < 10; i++){
    num += increment;
    added.push(addNums(num));
    console.timeLog("default", `${i} forloop`)
  }

  console.timeEnd("default", "end")
  return added;



}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
