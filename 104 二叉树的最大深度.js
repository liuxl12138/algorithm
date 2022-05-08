/*
 1.递归
 时间复杂度:O(n)
 空间复杂度:O(n)
 */

var maxDepth = function (root) {
    if (!root) {
        return 0
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};


/*
 1.层次遍历
 时间复杂度:O(n)
 空间复杂度:O(n)
 */

var maxDepth = function (root) {
    if (!root) {
        return []
    }
    let count = 0
    let queue = []
    queue.push(root)
    while (queue.length) {
        let levelSize = queue.length
        count++
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return count
};