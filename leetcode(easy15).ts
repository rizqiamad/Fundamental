class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 && !list2) return null
    else if (!list2) return list1
    else if (!list1) return list2

    let curr = list1
    let ptr = list2
    let x = 0
    let node : ListNode | null = null
    while (ptr && ptr.next) {
        if (curr.val < ptr.val && x === 0){
            node = curr
            if (curr.next)curr = curr.next
            node.next = ptr
            list2 = node
            ++x
        }
        else if (ptr.next?.val && curr.val < ptr.next?.val) {
            node = curr
            if (curr.next)curr = curr.next
            node.next = ptr.next
            ptr.next = node
            if (ptr.next) ptr = ptr.next
        }else if (ptr.next)ptr = ptr.next
        else if (!ptr.next && ptr.val < curr.val || ptr.val === curr.val){
            ptr.next = curr
            ptr = ptr.next
            if (curr.next) curr = curr.next
        }
    }

    return list2
};