let quikSelect = function (arr, left, right, k) {
    if (left < right) {
        let midIndex = findMid(arr, left, right)
        if (midIndex === k) {
            return arr[midIndex]
        } else if (k > midIndex) {
            return quikSelect(arr, midIndex + 1, right, k)
        } else {
            return quikSelect(arr, left, midIndex - 1, k)
        }
    }
    return arr[left]

    function findMid(arr, left, right) {
        let i = left, j = right
        let baseIndex = Math.floor(Math.random() * (right - left + 1)) + left
        swap(arr,left, baseIndex)
        let base = arr[left]
        while (i !== j) {
            while (arr[j] >= base && i < j) {
                j--
            }
            while (arr[i] <= base && i < j) {
                i++
            }
            if (i < j) {
                swap(arr,i, j)
            }
        }
        swap(arr,i, left)
        return i
    }
    function swap(arr,index1, index2) {
        let tmp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = tmp
    }
}
let findKthLargest = function (nums, k) {
    return quikSelect(nums, 0, nums.length - 1, nums.length - k)

};