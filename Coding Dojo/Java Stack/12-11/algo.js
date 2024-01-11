class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Creates a new node and adds it at the front of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtFront(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            // newNode = this.head;
        }
        this.size++;
        return this;
    }

    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {
        if (this.head == null) {
            this.head = new Node(data);
            this.tail = this.head;
        } else {
            let oldTail = this.tail;
            this.tail = new Node(data);
            this.tail.prev = oldTail;
            this.tail.prev.next = this.tail;
        }
        this.size++;
        return this;
    }

    // EXTRA
    /**
     * Removes the middle node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the removed node.
     */
    // removeMiddleNode() {
    //   if (this.head == null) return null;
    //   if (this.head == this.tail) {
    //     this.head.data = null;
    //     this.head = null;
    //     return this;
    //   }
    //   if (this.head.next == this.tail) {
    //     let tempHead = this.head;
    //     this.head = this.tail;
    //     this.head.next = null;
    //     this.head.prev = null;
    //     tempHead.next = null;
    //     tempHead.prev = null;
    //     return this;
    //   }
    //   let start = this.head;
    //   let size = 0;
    //   while (start) {
    //     start = start.next;
    //     size++;
    //   }
    //   size = Math.floor(size / 2);
    //   start = this.head;
    //   for (let i = 0; i < size; i++) {
    //     start = start.next;
    //   }
    //   let previous = start.prev;
    //   previous.next = start.next;
    //   start.next.prev = start.prev;
    //   start.next = null;
    //   start.prev = null;
    //   return start.data;
    // }

    removeMiddleNode() {
        if (this.size < 2 || this.size % 2 == 0) {
            return "no middle node";
        }
        let headRunner = this.head;
        let tailRunner = this.tail;
        let middleNode = this.head;
        while (headRunner) {
            if (headRunner.next === tailRunner.prev) {
                middleNode = headRunner.next;
                middleNode.prev.next = middleNode.next;
                middleNode.next.prev = middleNode.prev;
                middleNode.next = null;
                middleNode.prev = null;
                return middleNode.data;
            }
            headRunner = headRunner.next;
            tailRunner = tailRunner.prev;
        }
    }
    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    /**
     * Adds all the given items to the back of this list.
     * @param {Array<any>} items Items to be added to the back of this list.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBackMany(items = []) {
        items.forEach((item) => this.insertAtBack(item));
        return this;
    }
}

const emptyList = new DoublyLinkedList();

/**************** Uncomment these test lists after insertAtBack is created. ****************/
const singleNodeList = new DoublyLinkedList().insertAtBack(1);
const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new DoublyLinkedList().insertAtBackMany([
    -5, -10, 4, -3, 6, 1, -7, -2,
]);

console.log(secondThreeList.toArray());
console.log(secondThreeList.removeMiddleNode());
console.log(secondThreeList.removeMiddleNode());
console.log(secondThreeList.removeMiddleNode());
console.log(secondThreeList.insertAtFront(7).toArray());
