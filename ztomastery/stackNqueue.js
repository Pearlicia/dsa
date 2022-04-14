// class CrazyQueue {
//     constructor() {
//       this.first = [];
//       this.last = [];
//     }
  
//     enqueue(value) {
//       const length = this.first.length;
//       for (let i = 0; i < length; i++) {
//         this.last.push(this.first.pop());
//       }
//       this.last.push(value);
//       return this;
//     }
  
//     dequeue() {
//       const length = this.last.length;
//       for (let i = 0; i < length; i++) {
//         this.first.push(this.last.pop());
//       }
//       this.first.pop();
//       return this;
//     }
//     peek() {
//       if (this.last.length > 0) {
//         return this.last[0];
//       }
//       return this.first[this.first.length - 1];
//     }
//   }
  
// const myQueue = new CrazyQueue();
// console.log(myQueue.peek());
// console.log(myQueue.enqueue('Joy'));
// console.log(myQueue.enqueue('Matt'));
// console.log(myQueue.enqueue('Pavel'));
// console.log(myQueue.peek());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.peek());






var MyQueue = function() {
        this.first = [];
        this.last = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    const length = this.first.length;
    for (let i = 0; i < length; i++){
        this.last.push(this.first.pop());
    }
    this.last.push(x);
    return this;
    
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const length = this.last.length;
    for (let i = 0; i < length; i++){
        this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
    
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.last.length > 0) {
        return this.last[0];
    }
    return this.first[this.first.length - 1];
    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    
};

const myQueue = MyQueue();
console.log(myQueue.push(x));
//console.log(myQueue.enqueue('Joy'));
// myQueue.enqueue('Matt');
// myQueue.enqueue('Pavel');
// myQueue.peek();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.peek();
