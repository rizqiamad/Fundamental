function isPalindrome(s: string): boolean {
    let newStr = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    console.log(newStr)
    if (newStr === newStr.split('').reverse().join('')) return true
    return false
};

console.log(isPalindrome("0P"))