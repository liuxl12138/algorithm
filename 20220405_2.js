/**
 * 时间复杂度:O(n)
 * 空间复杂度:O(n)
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function (s, c) {
    let res = []
    let len = s.length
    let cIndex = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < len; i++) {
        if (s[i] === c) {
            cIndex = i
        }
        res[i] = Math.abs(cIndex - i)
    }
    cIndex = Number.MAX_SAFE_INTEGER
    for (let j = len - 1; j >= 0; j--) {
        if (s[j] === c){
            cIndex = j
        }
        res[j] = Math.min(Math.abs(cIndex - j),res[j])
    }

    return res
};
