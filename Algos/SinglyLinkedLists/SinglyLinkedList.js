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
        //your code here
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
        // Your Code Here
        const newNode = new ListNode(data);

        if (this.isEmpty()) {
            this.head = newNode;
            return this;
        }

        let runner = this.head;
        while (runner.next !== null) {
            runner = runner.next
        }

        runner.next = newNode
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
        if (this.isEmpty()) {
            this.head = new ListNode(data);
            return this;
        }

        if (runner.next === null) {
            runner.next = new ListNode(data);
            return this;
        }

        return this.insertAtBackRecursive(data, runner.next)
    }

    insertAtFront(data) {
        const newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    /**
     * Removes the first node of this list.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The data from the removed node.
     */
    removeHead() {
        if (this.isEmpty()) {
            return null;
        }
        let temp = this.head;
        this.head = this.head.next;
        return temp.data;
    }

    // EXTRA
    /**
     * Calculates the average of this list.
     * - Time: O(n) linear, n = length of list.
     * - Space: O(1) constant.
     * @returns {number|NaN} The average of the node's data.
     */
    average() {
        // Your Code Here~
        let runner = this.head;
        let sum = 0;
        let count = 0;
        while (runner) {
            sum += runner.data;
            count += 1;
            runner = runner.next;
        }
        return sum / count;
    }


    /**
     * Removes the last node of this list.
     * - Time: O(n) linear, n = length of list.
     * - Space: O(1) constant.
     * @returns {any} The data from the node that was removed.
     */
    removeBack() {
        let runner = this.head;
        while (runner.next.next) {
            runner = runner.next;
        }
        let temp = runner;
        // console.log(temp);
        // console.log(runner.next);
        runner.next = null;
        return temp.data;
    }


    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(n) linear, n = length of list.
     * - Space: O(1) constant.
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains(val) {
        let runner = this.head;
        while (runner) {
            if (runner.data === val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }


    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(n) linear, n = length of list.
     * - Space: O(n) linear due to the call stack.
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?node} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
     */
    containsRecursive(val, current = this.head) {
        if (!current) return false;
        if (current.data === val) return true;
        return this.containsRecursive(val, current.next)
    }

    /**
     * Retrieves the data of the second to last node in this list.
     * - Time: O(n - 1) n = list length -> O(n) linear.
     * - Space: O(1) constant.
     * @returns {any} The data of the second to last node or null if there is no
     *    second to last node.
     */
    secondToLast() {
        // Your Code Here
    }

    /**
     * Removes the node that has the given val.
     * - Time: O(n) linear, n = list length since the last node could be the one
     *    that is removed.
     * - Space: O(1) constant.
     * @param {any} val The value to compare to the node's data to find the
     *    node to be removed.
     * @returns {boolean} Indicates if a node was removed or not.
     */
    removeVal(val) {
        // Your Code Here

        /* Note: 
            If we remove/change the head will be different than other nodes. (Remember: you can use other functions in the class! (Like removehead())
            If the node is at the very end of our list, our node connection/disconnection logic would also be different.

            If there are multiple of the same value, remove the first node found.
            If the value is not found, return false. 
        */
    }


    // EXTRA
    /**
     * Inserts a new node before a node with that has a specified value.
     * - Time: O(n) linear, n = list length, because we could end up pre-pending
     *    to the last node.
     * - Space: O(1) constant.
     * @param {any} newVal The value to use for the new node that is being added.
     * @param {any} targetVal The value to use to find the node that the newVal
     *    should be inserted in front of.
     * @returns {ListNode|null} The added node, or null.
     */
    prepend(newVal, targetVal) {
        // Edge-case: If the targetVal is the head of our list, we'd be adding the newVal node as our head. So we could use our insertAtFront() method.

        // newVal is the node data being added.
        // targetVal is the node that will be ahead of the new node being added.

        // Note: return the prepended Node or null if the targetVal is not found.
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
const emptyList = new SinglyLinkedList().insertAtBack(2).insertAtBack(3).insertAtBack(4);
console.log(emptyList.toArr())

// const singleNodeList = new SinglyLinkedList().insertAtBack(1);
// const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
// const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
// const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new SinglyLinkedList().insertAtBackMany([
    -5, -10, 4, -3, 6, 1, -7, -2
]);

unorderedList.removeBack()



console.log(emptyList.toArr());
