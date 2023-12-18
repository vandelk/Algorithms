class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.head = null;
    }

    /**
     * Adds a new given item to the top of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {Stack} this
     */
    push(item) {
        let newNode = new StackNode(item);
        if (this.isEmpty()) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;

        return this;
    }

    /**
     * Removes the top item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() {
        // check to see if the stack is empty
        if (this.isEmpty()) {
            // if it is, return undefined
            return undefined;
        }
        // create a variable and equal it to this.head
        let popped = this.head;
        // set this.head to this.head.next
        this.head = this.head.next;
        popped.next = null;
        // return popped.data
        return popped.data;
    }

    /**
     * Retrieves the top item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top item of this stack.
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.head;
    }

    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        if (this.head == null) {
            return true;
        }
        return false;
    }

    /**
     * Returns the size of this stack.
     * @returns {number} The length.
     */
    size() {
        let output = 0;
        if (this.isEmpty()) {
            return output;
        }
        const tempStack = new Stack();
        while (this.head) {
            output++;
            tempStack.push(this.pop());
        }
        while (tempStack.head) {
            this.push(tempStack.pop());
        }
        return output;
    }

    toArr() {
        const arr = [];
        let runner = this.head;

        while (runner) {
            arr.push(runner.data);
            runner = runner.next;
        }
        return arr;
    }
}
