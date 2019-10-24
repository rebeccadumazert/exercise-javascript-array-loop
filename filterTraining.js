const flottingNb = [-1.1, 2.2, -3.3, -8.4, 5.99];

const negativNb = flottingNb.filter(function(number) {
  return Math.floor(number) > -5 && Math.floor(number) < 0;
});

console.log('nombre entre -5 et 0' + negativNb);
