// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。

//不使用额外空间

//时间复杂度 O（1）
//空间复杂度 O（1）
var MinStack = function () {
	this.stackArr = []
	this.minValue = 0
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	if (this.stackArr.length) {
		this.stackArr.push(val - this.minValue)
		this.minValue = Math.min(this.minValue, val)
	} else {
		//注意push第一个元素时，
		//minValue为val，而不是Math.min(this.minValue, val)
		//入栈的值是0
		this.stackArr.push(0)
		this.minValue = val
	}
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	if (this.stackArr.length > 0) {
		let diff = this.stackArr.pop()
		if (diff < 0) {
			//minValue为实际的出栈值val diff = val - 上一个minValue值
			let minTmp = this.minValue
			this.minValue = minTmp - diff
			return minTmp
		} else {
			//minValue不用改变
			return this.minValue + diff
		}
	}
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	console.log(this)
	if (this.stackArr.length > 0) {
		let diff = this.stackArr[this.stackArr.length - 1]
		if (diff > 0) {
			return this.minValue + diff
		} else {
			return this.minValue
		}
	}
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.minValue
}

let stack = new MinStack()
stack.push(1)
stack.push(2)
stack.pop()
console.log(stack.top())
