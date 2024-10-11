function isNumber(s: string): boolean {
    if (s.includes('Infinity')) return false
    if (isNaN(Number(s))) return false
    else return true
};