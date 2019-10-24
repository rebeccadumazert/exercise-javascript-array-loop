const userNames = ['Jojo', 'Beka', 'Juju', 'RodrigoDeLaVega', 'Becassine'];

const nameStartBe = userNames.find(function(wordBe) {
  return wordBe.startsWith('Be');
});

console.log('name start BE : ' + nameStartBe);

const userBeginWithBe = userNames.find(function(userName) {
  return userName[0] === 'B' && userName[1] === 'e';
});

console.log(
  'solution de foulek et non pas avec startWith pour les nazes (je rigole) : ' +
    userBeginWithBe
);
