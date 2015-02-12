var occurance = function(wordStringArray) {
  var wordCounter = [];

  wordStringArray.sort();
  wordStringArray.forEach(function(word, index) {
      if ( wordStringArray[index] !== wordStringArray[index + 1] ) {
        wordCounter.push(1);
      } else {
        wordCounter[wordCounter.length-1]++;
      }
  });


  return wordCounter;

}

var wordOrder = function(wordString) {
  var uniqueWordsList = [];
  var wordStringArray = wordString.split(", ");
  var sortedUniqueWordsList = [];

  var wordCounter = occurance(wordStringArray);

    wordStringArray.forEach(function(word, index) {
      if (uniqueWordsList.indexOf(word) === -1) {
        uniqueWordsList.push(word)
      }
    });

    uniqueWordsList.sort(function(a, b) {
      return uniqueWordsList - wordCounter
    });

    uniqueWordsList.forEach(function(word, index) {
      sortedUniqueWordsList.push(word)
    });

  return sortedUniqueWordsList;
}




// var wordStringArray = wordString.split(", ").sort();
// var w = wordStringArray.length();
//
//   for (i = 0; i < w; i++) {
//     for (j = i+1; j < w; j++) {
//       if ((wordStringArray[i]) === (wordStringArray[j])) {
//         wordStringArray.splice(i,1);
//       }
//       return wordStringArray;
//     };
//   };
