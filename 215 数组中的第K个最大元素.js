//参考：https://github.com/sisterAn/JavaScript-Algorithms/issues/62

        //使用快速排序思想来解决
        //快速排序过程中，递归的每一次都会确定中间值的位置,所以在这个过程中，判断中间值的位置是否就是要查找的值的位置
        //判断要查找值所在的区间，另一个区间不用查找，就可以提交效率
        //因为要查找的值为第k大的元素，所以他在排序好的数组中的位置就是arr.length-k
        //可以使用随机化来优化快速排序
        //时间复杂度O(n)
        //空间复杂度O(logn)
        let quickSelect = function (arr, left, right, kIndex) {
            if (left < right) {
                let index = findMid(arr, left, right)
                if (index === kIndex) {
                    return arr[index]
                } else if (kIndex < index) {
                    return quickSelect(arr, left, index - 1, kIndex)
                } else {
                    return quickSelect(arr, index + 1, right, kIndex)
                }
            }
            return arr[left]
        }
        let swap = function (arr,index1,index2){
            let tmp = arr[index1]
            arr[index1] = arr[index2]
            arr[index2] = tmp
        }
        var findMid = function (arr, left, right) {
            //随机选取
            let randomIndex= Math.floor(Math.random() *(right -left +1)) +left
            swap(arr,left,randomIndex)
            let base = arr[left]
            let i = left, j = right;
            let tmp
            while (i != j) {
                while (arr[j] >= base && i < j) {
                    j--
                }
                while (arr[i] <= base && i < j) {
                    i++
                }
                if (i < j) {
                    tmp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = tmp
                }
            }
            arr[left] = arr[i]
            arr[i] = base
            return i
        }
        let findKthLargest = function (nums, k) {
            return quickSelect(nums, 0, nums.length - 1, nums.length - k)
        };

        console.log(findKthLargest([1, 1, 1, 1], 2),'result') 