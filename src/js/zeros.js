function zerosOfFactorialEnd(n) {
  var f = 1;
  while (n) {
    f *= n--;
  }

  var s = f.toString();
  var l = s.length;
  var count = 0;
  for (let i = l - 1; i >= 0; i--) {
    if (s[i] == 0) {
      count++;
    }
  }
  return count;
}

console.log(zerosOfFactorialEnd(10));
