function rot13(str) {
  let newStr = str;
  let res = "";
  var punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < newStr[i].length; j++) {
      if (punctuation.includes(newStr[i][j])) {
        res += newStr[i][j];
      } else if (newStr[i][j] === " ") {
        res += newStr[i][j];
      } else {
        let index = alph.indexOf(newStr[i][j]) + 13;
        res += alph.charAt(index);
      }
    }
  }
  return res;
}
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
