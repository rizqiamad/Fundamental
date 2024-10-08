class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null):ListNode | null {
    let strL1:string = ''
    let strL2:string = ''
    let head:ListNode = new ListNode()
    head.next = l1
    while(head.next != null){
        strL1 = head.next.val + strL1
        head.next = head.next.next
    }
    head.next = l2
    while(head.next != null){
        strL2 = head.next.val + strL2
        head.next = head.next.next
    }
    let resSumTwoNum:number = Number(strL1) + Number(strL2)
    let strResSumTwoNum:string = resSumTwoNum.toFixed(0).toString().split('').reverse().join('')
    console.log(strResSumTwoNum);
    let newResSumList:ListNode = new ListNode()
    let ptr:ListNode = new ListNode()
    ptr = newResSumList
    for (let i = 0; i < strResSumTwoNum.length; i++) {
        ptr.val = Number(strResSumTwoNum[i])
        if (i !== strResSumTwoNum.length - 1) {
            ptr.next = new ListNode()
            ptr = ptr.next
        }else{
            ptr.next = null
        }
    }
    return newResSumList
};

let l1:ListNode = new ListNode(2, new ListNode(4, new ListNode(3)))
let l2:ListNode = new ListNode(5, new ListNode(6, new ListNode(4)))

console.log(addTwoNumbers(l1, l2))