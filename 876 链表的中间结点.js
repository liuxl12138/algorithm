// 给定一个头结点为 head 的非空单链表，返回链表的中间结点。如果有两个中间结点，则返回第二个中间结点。
// 时间复杂度：O(n)
// 空间复杂度：O(1)

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
var getMidNode = function (head) {
    let fast = head
    let slow = head
    while (fast && fast.next) {
        fast=fast.next.next
        slow=slow.next
    }
    return slow.val
}
