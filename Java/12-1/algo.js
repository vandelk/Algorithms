/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */

class ListNode {
    /**
     * Constructs a new Node instance. Executed when the 'new' keyword is used.
     * @param {any} data The data to be added into this new instance of a Node.
     *    The data can be anything, just like an array can contain strings,
     *    numbers, objects, etc.
     * @returns {ListNode} A new Node instance is returned automatically without
     *    having to be explicitly written (implicit return).
     */
    constructor(data) {
      this.data = data;
      /**
       * This property is used to link this node to whichever node is next
       * in the list. By default, this new node is not linked to any other
       * nodes, so the setting / updating of this property will happen sometime
       * after this node is created.
       *
       * @type {ListNode|null}
       */
      this.next = null;
    }
  }
  
  /**
   * This class keeps track of the start (head) of the list and to store all the
   * functionality (methods) that each list should have.
   */
  class SinglyLinkedList {
    /**
     * Constructs a new instance of an empty linked list that inherits all the
     * methods.
     * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
     *    returned without having to explicitly write "return".
     */
    constructor() {
      /** @type {ListNode|null} */
      this.head = null;
    }
  
    /**
     * Determines if this list is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isEmpty() {
      return this.head === null;
    }
  
    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBack(data) {
      if (this.head === null) {
        this.head = new ListNode(data);
        return;
      }
      var runner = this.head;
      while (runner.next !== null) {
        runner = runner.next
      }
      runner.next = new ListNode(data);
      return this;
    }
  
  
    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @param {?ListNode} runner The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackRecursive(data, runner = this.head) {
      if (runner.next == null) {
        this.head = new ListNode(data)
        return this
      }
      if (runner.next == null) {
        runner.next = new ListNode(data)
        return this
      }
      return this.insertAtBackRecursive(data, runner.next)
    }
  
  
    /**
     * Concatenates the nodes of a given list onto the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {SinglyLinkedList} addList An instance of a different list whose
     *    whose nodes will be added to the back of this list.
     * @returns {SinglyLinkedList} This list with the added nodes.
     */
    concat(addList) {
      var runner = this.head
      while (runner.next != null) {
        runner = runner.next
      }
      runner.next = addList.head
      return this
    }
  
    /**
     * Finds the node with the smallest data and moves that node to the front of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {SinglyLinkedList} This list.
     */
  
    // 42 -> 9 -> 329
    // 42 -> 9 -> 329 -> 0
    // 0 -> 42 -> 9 -> 329
    moveMinToFront() {
      let runner = this.head
      let previous = null
      let tempPrevious = null
      let tempRunner = null
      let min = this.head.data;
      while (runner != null) {
        if (runner.data < min) {
          min = runner.data
          tempRunner = runner
          tempPrevious = previous
        }
        previous = runner
        runner = runner.next
      }
      if (!tempPrevious) {
        return this
      }
  
      tempPrevious.next = tempRunner.next
      tempRunner.next = this.head
      this.head = tempRunner
      return this
    }
  
  
  
  
  
  
    /**
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackMany(vals) {
      for (const item of vals) {
        this.insertAtBack(item);
      }
      return this;
    }
  
    /**
     * Converts this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */
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
  
  /******************************************************************* 
  Multiple test lists already constructed to test your methods on.
  Below commented code depends on insertAtBack method to be completed,
  after completing it, uncomment the code.
  */
  const emptyList = new SinglyLinkedList();
  
  const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
  const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
  const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
  const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6, 1]);
  const unorderedList = new SinglyLinkedList().insertAtBackMany([
    -5, -10, 4, -3, 6, 1, -71, -2,
  ]);
  
  
  // Print your list like so:
  // console.log(firstThreeList.toArr());
  // console.log(firstThreeList.insertAtBackRecursive(32).toArr());
  // console.log(firstThreeList.concat(secondThreeList).toArr());
  // console.log(unorderedList.toArr());
  // console.log(unorderedList.moveMinToFront().toArr());
  // console.log(firstThreeList.toArr());
  // console.log(firstThreeList.moveMinToFront().toArr());
  // console.log(secondThreeList.toArr());
  // console.log(secondThreeList.moveMinToFront().toArr());
  console.log(unorderedList.toArr())
  unorderedList.moveMinToFront();
  console.log(unorderedList.toArr())