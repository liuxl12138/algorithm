// 二叉树的前序遍历
/**
 * 递归
 * 时间复杂度:O(n)
 * 空间复杂度:O(n)
 * @param {*} root 
 * @returns 
 */
var preorderTraversal = function (root) {
    let res = []
    var dfs = function (res, root) {
        if (!root) {
            return res
        }
        res.push(root.val)
        dfs(res, root.left)
        dfs(res, root.right)
    }
    dfs(res, root)
    return res
};
/**
 * 栈
 * 时间复杂度:O(n)
 * 空间复杂度:O(n)
 * @param {*} root 
 * @returns 
 */
var preorderTraversal = function (root) {
    let res = []
    if (!root) {
        return res
    }
    let stack = [root]
    let tmp
    while (stack.length) {
        tmp = stack.pop()
        res.push(tmp.val)
        tmp.right && stack.push(tmp.right)
        tmp.left && stack.push(tmp.left)
    }
    return res
};