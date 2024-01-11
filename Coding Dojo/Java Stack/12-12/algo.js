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
    }

    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    /**
     * Inserts a new node with the given newVal after the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertAfter(targetVal, newVal) {
        var runner = this.head;
        var newNode = new Node(newVal);
        while (runner != null) {
            //checks if inserting at end of list
            if (runner.next == null && runner.data == targetVal) {
                this.insertAtBack(newVal);
                return true;
            }

            //checks rest of list
            if (runner.data == targetVal) {
                newNode.next = runner.next;
                runner.next.prev = newNode;
                newNode.prev = runner;
                runner.next = newNode;
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    /**
     * Inserts a new node with the given newVal before the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertBefore(targetVal, newVal) {
        var runner = this.head;
        var newNode = new Node(newVal);

        //checks if inserting at head
        if (runner.data == targetVal) {
            newNode.next = runner;
            runner.prev = newNode;
            this.head = newNode;
            return true;
        }

        //checks if inserting anywhere else in list
        while (runner != null) {
            if (runner.data == targetVal) {
                runner.prev.next = newNode;
                runner.prev = newNode;
                newNode.prev = runner.prev;
                newNode.next = runner;
                return true;
            }
            runner = runner.next;
        }
        return false;
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

console.log("-------------insertAfter---------------");
console.log(secondThreeList.insertAfter(5, 7));
console.log(secondThreeList.toArray());
console.log(secondThreeList.insertAfter(6, 8));
console.log(secondThreeList.toArray());
console.log(secondThreeList.insertAfter(4, 3));
console.log(secondThreeList.toArray());
console.log(secondThreeList.insertAfter(2, 1));
console.log(secondThreeList.toArray());

console.log("-------------insertBefore---------------");
console.log(unorderedList.insertBefore(-2, 10));
console.log(unorderedList.toArray());
// console.log(unorderedList.insertBefore(-5,10));
console.log(unorderedList.insertBefore(6, 10));
console.log(unorderedList.toArray());
console.log(unorderedList.insertBefore(3, 10));
console.log(unorderedList.toArray());
console.log(unorderedList.insertBefore(-5, 2));
console.log(unorderedList.toArray());
