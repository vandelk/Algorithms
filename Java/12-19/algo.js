class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Class to represent a queue to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.head;
    }

    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        let runner = this.head;
        if (this.isEmpty()) {
            this.head = new QueueNode(item);
            return this.size();
        }
        while (runner != null) {
            runner = runner.next;
        }
        runner.next = new QueueNode(item);
        return this.size();
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return temp.data;
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        return this.isEmpty() ? undefined : this.head;
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.head == null ? true : false;
    }

    /**
     * Retrieves the size of this queue.
     * @returns {number} The length.
     */
    size() {
        let runner = this.head;
        let count = 0;
        while (runner != null) {
            runner = runner.next;
            count++;
        }
        return count;
    }

    size2() {
        let output = 0;
        const tempQueue = new Queue();
        while (this.head) {
            output++;
            tempQueue.enqueue(this.dequeue());
        }
        while (tempQueue.head) {
            this.enqueue(tempQueue.dequeue());
        }
        return output;
    }
}
