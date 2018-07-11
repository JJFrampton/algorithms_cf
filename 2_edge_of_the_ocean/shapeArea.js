function shapeArea(n) {
 if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 5;
  } else {
  var total = 0;
  while ( n > 2 ) {
     total += ((n-1)*4);
     n--
  }
  return total + 5;
  }
}
