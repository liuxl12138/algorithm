/**
    给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

    如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

    您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
*/
//时间复杂度 O(max(m,n)) m, n为两个链表的长度
class ListNode {
	constructor(val) {
		this.val = val
		this.next = null
	}
	toString() {
		return this.val
	}
}
let l1 = new ListNode(2)
l1.next = new ListNode(3)
l1.next.next = new ListNode(4)

let l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(7)
;(function () {
	let carry = 0
	let header = null
	let tail = null
	while (l1 || l2) {
		const n1 = l1 ? l1.val : 0
		const n2 = l2 ? l2.val : 0
		const sum = n1 + n2 + carry
		if (!header) {
			header = tail = new ListNode(sum % 10)
		} else {
			tail.next = new ListNode(sum % 10)
			tail = tail.next
		}
		carry = Math.floor(sum / 10)
		if (l1) {
			l1 = l1.next
		}
		if (l2) {
			l2 = l2.next
		}
	}
	if (carry > 0) {
		tail.next = new ListNode(carry)
	}
	while (header) {
		header = header.next
	}
})()
