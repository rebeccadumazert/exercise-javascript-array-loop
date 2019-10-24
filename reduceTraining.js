const numberTable = [-67, 7, 99, 6, 43, 9, 34, 29, -5];

const largestNb = numberTable.reduce(function(a, currentValue) {
  if (a < currentValue) {
    return currentValue;
  }
  return a;
}, numberTable[0]);

console.log('kikoo ' + largestNb);

const sentenceTable = 'coucou petit chou des bois, que fais tu ici ?';
const splitSentence = sentenceTable
  .split('')
  .reduce(function(acc, currentCharacter, i) {
    if (i % 2 === 0) {
      return acc + currentCharacter;
    }
    return acc;
  }, sentenceTable[0]);

console.log(splitSentence);
