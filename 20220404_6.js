/*
 层序遍历
 */
 var invertTree = function (root) {
    if (!root) {
        return root
    }
    let queue = []
    queue.push(root)
    let tmp;
    while (queue.length) {
        let levelSize = queue.length
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            tmp = node.left
            node.left = node.right
            node.right = tmp
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return root
};
