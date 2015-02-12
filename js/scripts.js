var occurance = function(wordStringArray) {
  var wordCounter = [];

  wordStringArray.sort();
  wordStringArray.forEach(function(word, index) {
      if ( wordStringArray[0] !== wordStringArray[1] ) {
        wordCounter.push(1);
        // wordStringArray.splice(1);
      } else {
        wordCounter[wordCounter.length-1]++;
      }
  });
  // for (var i = 0; i < wordStringArray.length(); i++) {
  //   for (var j = i+1; j < wordStringArray.length(); j++) {

  return wordCounter;

}

var wordOrder = function(wordString) {
  var uniqueWordsList = [];
  var wordStringArray = wordString.split(", ");

  var wordCounter = occurance(wordStringArray);

  wordStringArray.forEach(function(word, index) {
    if (uniqueWordsList.indexOf(word) === -1) {
      uniqueWordsList.push(word)
    }
  });

  return uniqueWordsList;
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
