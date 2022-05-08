/**
 * 题目描述:给出二叉搜索树的根节点，该树的节点值各不相同，请你将其转换为累加树，使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。
 * 解题思路:https://leetcode-cn.com/problems/convert-bst-to-greater-tree/solution/ba-er-cha-sou-suo-shu-zhuan-huan-wei-lei-jia-sh-14/
 */

//时间复杂度:O(n)
//空间复杂度:O(n)
function convertBST(root) {
  let sum = 0;
  const dfs = (root) => {
    if (!root) {
      return null;
    }
    dfs(root.right);
    sum += root.val;
    root.val = sum;
    dfs(root.left);
  };
  dfs(root);
  return root;
}

//TODO: Morris 遍历