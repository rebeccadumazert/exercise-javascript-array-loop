const numberFlotting = [1.5, -7.9, 8.5, 5.6, 8.1, 8.9];

function floor(value) {
  return Math.floor(value);
}
const numberIntere = numberFlotting.map(floor);

console.log(numberIntere);

const numberAbsolute = numberFlotting.map(Math.abs);

console.log(numberAbsolute);
