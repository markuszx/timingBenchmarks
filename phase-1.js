// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  let added =1
  for (let i =2; i <= n; i++){
    added += i
  }
  return added

}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
   let added = 0
  for(let i = 1; i <= n; i ++){
    added += addNums(i)
  }
  return added;



}



module.exports = [addNums, addManyNums];
