// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
// 时间复杂度：O(n)
// 空间复杂度：O(1)

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
var deleteNthFromEnd = function (head, n) {
    let prehead = new ListNode(-1)
    prehead.next = head
    let slow = prehead
    let fast = head
    while (n > 0) {
        fast = fast.next
        --n
    }
    while (fast) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    //不能用head为返回结果，因为可能存在head = [1] ,n = 1 的情况
    const result = prehead.next
    return result
}
