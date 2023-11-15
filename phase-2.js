const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let added =[];
  let num =0;
  for(let i =0; i < 10; i++){
    num += increment;
    added.push(addNums(num))

  }
  return added;





}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let added =[];
  let num =0;
  for(let i =0; i < 10; i++){
    num += increment;
    added.push(addManyNums(num))

  }
  return added;



}

module.exports = [addNums10, addManyNums10];
