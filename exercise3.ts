function anagram(s: string, t: string): boolean {
  if (s.split("").every((item) => t.includes(item))) {
    for (const item of s.split("")) {
      if (t.includes(item)) {
        t = t.replace(item, "");
      } else {
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log(anagram("sanagram", "nagaram"));
