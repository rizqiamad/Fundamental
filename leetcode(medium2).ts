function lengthOfLongestSubstring(s: string): number {
  let result: number = 0;
  let subString: string;
  let lengthTotal: number[] = [];
  if (s !== "") {
    for (let i = 0; i < s.length; i++) {
      subString = s[i];
      for (let j = i + 1; j < s.length; j++) {
        if (!subString.includes(s[j])) subString += s[j];
        else break
        if (j === s.length - 1) break;
      }
      lengthTotal[i] = subString.length;
    }
    lengthTotal.sort((a, b) => a - b);
    result = lengthTotal[lengthTotal.length - 1];
  } else {
    result = s.length;
  }
  return result;
}

let res = lengthOfLongestSubstring(" ");
console.log(res);
