var allLongestStrings = function (inputArray) {
    response = [];
    maxLength = inputArray.sort(function(a,b){
      return b.length - a.length
    })[0].length;
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length === maxLength) {
          response.push(inputArray[i]);
        }
    }
  return response;
}
