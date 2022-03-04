/**
 * @param {string} str
 * @param {string} substring
 */
function naiveSearch(str, substring) {
  let count = 0;
  str.split("").forEach((ch, index) => {
    if (ch === substring[0]) {
      for (let i = 0; i < substring.length; i++) {
        if (str[index + i] !== substring[i]) {
          return;
        }
        if (i === substring.length - 1) {
          if (str[index + i] == substring[i]) {
            count++;
          }
        }
      }
    }
  });
  return count;
}

console.log(naiveSearch("dog ","go"));