

/**
 * @param {number} k
 */
export var MyCircularQueue = function(k) {
    if(k >= 0){
        const queue = new Array(k);
        let head = [0];
        let tail = [0]
        return queue;
    } else {
        throw Error("Please provide a positive number");
    }
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    
};


/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */


/**
 * check if queue is full before enqueue
 * check if queue is empty before dequeue
 * return a boolean regarding whether the operation was successful and act accordingly
 */
