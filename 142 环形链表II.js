/**
 * 题目描述:
    给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 */

//时间复杂度:O(n) 
//在最初判断快慢指针是否相遇时，slow指针走过的距离不会超过链表的总长度；随后寻找入环点时，走过的距离也不会超过链表的总长度。因此，总的执行时间为 O(N)+O(N)=O(N)
//空间复杂度:O(1)
//解题思路:https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode-solution/
var detectCycle = function (head) {
  if (!head) {
    return null;
  }
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      let _slow = head;
      while (true) {
        if (_slow == slow) {
          return _slow;
        }
        _slow = _slow.next;
        slow = slow.next;
      }
    }
  }
  return null;
};

//TODO：哈希表
//时间复杂度:O(n)
//空间复杂度:O(n)
