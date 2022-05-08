/**
 * 栈
 * 时间复杂度:O(n)
 * 空间复杂度:O(n)
 */
var postorderTraversal = function (root) {
    if (!root) {
        return []
    }
    let res = []
    let stack = []
    while (root || stack.length) {
        while (root) {
            stack.push(root)
            res.unshift(root.val)
            root = root.right
        }
        root = stack.pop()
        root = root.left
    }
    return res
};