class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return head;
  let ptr: ListNode | null = new ListNode();
  let valArr: number[] = [];
  ptr = head;
  while (ptr !== null) {
    valArr.push(ptr.val);
    ptr = ptr.next;
  }
  head = null;
  let setArr = new Set(valArr);
  valArr.length = 0;
  for (const item of setArr) {
    valArr.push(item);
  }
  head = new ListNode(valArr[0]);
  ptr = head;
  for (let i = 1; i < valArr.length; i++) {
    ptr.next = new ListNode(valArr[i]);
    ptr = ptr?.next;
  }
  return head;
}

const head: ListNode = new ListNode(
  1,
  new ListNode(1, new ListNode(1, new ListNode(2)))
);

console.log(deleteDuplicates(head));
