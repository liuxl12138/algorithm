// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
// 时间复杂度：O(n+m)
// 空间复杂度：O(1)

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
var mergeTwoHeadList = function (list1, list2) {
    let head = new ListNode(-1)
    let prehead = head
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            head.next = list1
            list1 = list1.next
        } else {
            head.next = list2
            list2 = list2.next
        }
        head = head.next
    }
    head.next = list1 ? list1 : list2
    return prehead.next
}