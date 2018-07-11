function isLucky(n) {
    var total = function (array) {
        var total = 0;
        for (var i = 0; i < array.length; i++) {
            array[i] = parseInt(array[i]);
            total = total + array[i];
        }
        return total;
    }
    var stringNum = n.toString();
    var center = stringNum.length / 2;
    stringNum = stringNum.split("");
    console.log(stringNum);
    var half1 = stringNum.slice(0, center);
    var half2 = stringNum.slice(center, stringNum.length);
    console.log(half1);
    console.log(half2);
    half1 = total(half1);
    half2 = total(half2);
    if (half1 === half2) {
      return true;
    } else {
      return false;
    }
}
