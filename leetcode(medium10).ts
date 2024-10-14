class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next: ListNode | null = null) {
        this.val = (val===undefined ? 0 : val)
        this.next = next
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let curr = head
    let node = curr
    let x = 0
    while (curr) {
        curr = curr.next
        ++x
    }
    curr = head
    for (let i = x; i > 0; i--) {
        if (n === x && head) {
            if (head.next) head = head?.next
            else head = null
            break
        }
        if (i === n + 1) {
            if (curr?.next?.next) {
                curr.next = curr.next.next
            }else{
                if (curr)curr.next = null
            }
        }
        if (curr)curr = curr?.next
    }
    return head
};

let root = new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4))))
console.log(removeNthFromEnd(root,2))