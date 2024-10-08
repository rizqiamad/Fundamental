function isPalindrome(x: number): boolean {
    let check:boolean = false;
    let strNum = x.toString()
    console.log(strNum);
    let reverseStrNum = strNum.split('').reverse().join('')
    console.log(reverseStrNum);
    if (reverseStrNum === strNum) {
        check = true
    }else{
        check = false
    }
    return check
};

console.log(isPalindrome(5));