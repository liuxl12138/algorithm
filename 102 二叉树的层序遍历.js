/*
 * 使用队列
时间复杂度:O(n)
空间复杂度:O(n)
 */
var levelOrder = function (root) {
    if (!root) {
        return []
    }
    let res = []
    let queue = []
    queue.push(root)
    while (queue.length) {
        let levelSize = queue.length
        res.push([])
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift()
            res[res.length - 1].push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return res
};