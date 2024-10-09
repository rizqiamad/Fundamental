function checkObj(a:Object, b:Object):boolean{
    let result:boolean = false;
    if (JSON.stringify(a) === JSON.stringify(b)) result = true;
    return result;
}

let res:boolean = checkObj({a:1},{a:1});
console.log(res);