/**
 * 时间复杂度
 * 空间复杂度
 */

//链表定义
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let addTwoNumbers = function (l1, l2) {
  let head = (tail = null);
  let curry = 0;
  while (l1 || l2) {
    const value1 = l1 ? l1.val : 0;
    const value2 = l2 ? l2.val : 0;
    const sum = value1 + value2 + curry;

    if (!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next
    }
    curry = sub > 10 ? 1 : 0;

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (curry > 0) {
    tail.next = new ListNode(curry);
  }
  return head;
};
