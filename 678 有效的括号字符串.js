/**
 * 使用栈
 * 时间复杂度:O(n)
 * 空间复杂度:O(n) 两个栈的元素总数不会超过 nn
 * @param {*} s 字符串
 * @returns 
 */
var checkVaildString1 = function (s) {
    const leftStack = []
    const starStack = []
    const n = s.length
    for (let i = 0; i < n; i++) {
        const c = s[i]
        if (c === '(') {
            leftStack.push(i)
        } else if (c === '*') {
            starStack.push(i)
        } else {
            if (leftStack.length) {
                leftStack.pop()
            } else if (starStack.length) {
                starStack.pop()
            } else {
                return false
            }
        }
    }
    while (starStack.length && leftStack.length) {
        const leftIndex = leftStack.pop()
        const starIndex = starStack.pop()
        if (leftIndex > starIndex) {
            return false
        }
        return leftIndex.length === 0
    }
}

/**
 * 贪心
 * 时间复杂度:O(n)
 * 空间复杂度:O(1)
 */
var checkValidString2 = function (s) {
    const minNum = 0, maxNum = 0, n = s.length
    for (let i = 0; i < n; i++) {
        const c = s[i]
        if (c === '(') {
            minNum++
            maxNum++
        } else if (c === ')') {
            maxNum--
            minNum = Math.max(0, minNum - 1)
            //说明左括号多了
            if (maxNum < 0) {
                return false
            }
        } else {
            minNum = Math.max(minNum - 1, 0)
            maxNum++
        }
    }
    return minNum === 0

}