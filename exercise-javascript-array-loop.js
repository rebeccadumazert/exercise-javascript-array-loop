const tableOfNb = [1, 1, 1, 4, 1, 1, 1];
const deleteDifferentNb = tableOfNb.reduce(function(acc, currentNb) {
  console.log(acc, currentNb);
});

console.log(deleteDifferentNb);
