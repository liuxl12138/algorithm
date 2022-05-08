/**
 * 时间复杂度:O(n)
 * 空间复杂度:O(n)
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 1) {
        return n
    }
    let dp = []
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};

/**
 * 时间复杂度:O(n)
 * 空间复杂度:O(1) 利用滚动数组思想优化
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 1) {
        return n
    }
    if (n == 2) {
        return 2
    }
    let p = 1, q = 2, r = p + q;
    for (let i = 3; i < n; i++) {
        p = q
        q = r
        r = p  + q 
    }
    return r
};