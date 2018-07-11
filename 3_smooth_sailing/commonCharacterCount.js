function commonCharacterCount(s1, s2) {
  s1 = s1.split("");
  s2 = s2.split("");
  count = 0;
  for (var i = 0; i < s1.length; i++) {
    for (var k = 0; k < s2.length; k++) {
      console.log(s1[i]);
      console.log(s2[k]);
      if (s1[i] == s2[k]) {
        console.log("true");
        s2.splice([k],1);
        count ++
        break;
      }
    }
  }
  return count;
}
