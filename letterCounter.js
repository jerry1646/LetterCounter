function countLetters(originalStr){
  var letters = {};
  str = keepLowerLetters(originalStr);
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    addLetter(letters, letter);
  }
  return letters;
}

function addLetter(obj, letter){
  if (obj[letter]){
    obj[letter] += 1;
  } else{
    obj[letter] = 1;
  }
}

function keepLowerLetters(str){
  str = str.toLowerCase();
  listWords = str.split(" ");
  var noSpaceLower  = "";
  for (words of listWords){
    noSpaceLower += words;
  }
  return noSpaceLower;
}

console.log(countLetters("lighthouse in the house"));