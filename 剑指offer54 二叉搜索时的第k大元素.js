/**
 * 题目描述:给定一棵二叉搜索树，请找出其中第 k 大的节点的值。
 * 解题思路:https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/solution/by-yuiyake-engr/
 */

//时间复杂度:O(n)
//空间复杂度:O(n)
function kthLargest(root, k) {
  let res;
  const dfs = (root) => {
    if (!root) {
      return null;
    }
    dfs(root.right);
    k--;
    if (!k) {
      return (res = root.val);
    }
    dfs(root.left);
  };
  dfs(root);
  return res;
}
