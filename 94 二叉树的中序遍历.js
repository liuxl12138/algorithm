/**
 * 栈
 * 时间复杂度:O(n)
 * 空间复杂度:O(n)
 */

 var inorderTraversal = function(root) {
    let res =[]
    let stack =[]
    if(!root){
        return res
    }
    while(root || stack.length){
        while(root){
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        res.push(root.val)
        root = root.right
    }
};
