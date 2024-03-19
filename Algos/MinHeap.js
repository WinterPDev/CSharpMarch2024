/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 * 
 * - Visualization Link: https://www.cs.usfca.edu/~galles/visualization/Heap.html
 */
class MinHeap {
  constructor() {
    /**
     * 0th index not used, so null is a placeholder. Not using 0th index makes
     * calculating the left and right children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
    this.heap = [null];
  }

  /**
   * @param {number} i
   */
  idxOfParent(i) {
    // i == index of child node index position
    return Math.floor(i / 2);
  }

  /**
   * @param {number} i
   */
  idxOfLeftChild(i) {
    // i == index of parent node index position
    return i * 2;
  }

  /**
   * @param {number} i
   */
  idxOfRightChild(i) {
    // i == index of parent node index position
    return i * 2 + 1;
  }

  /**
   * Retrieves the top (minimum number) in the heap without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {?number} Null if empty.
   */
  top() {
    if (!this.heap[1]) {
      return null;
    }
    return this.heap[1];
  }

  /**
   * Inserts a new number into the heap and reorders heap to maintain order.
   * 1. Push new num to back.
   * 2. Iteratively swap the new num with it's parent while it is smaller than
   *    it's parent.
   * - Time: O(log n) logarithmic due to shiftUp.
   * - Space: O(1) constant.
   * @param {number} num The num to add.
   */
  insert(num) {
    this.heap.push(num);
    let insertIndex = this.heap.length - 1;
    let parentIndex = this.idxOfParent(insertIndex);
    while (
      this.heap[insertIndex] < this.heap[parentIndex] &&
      insertIndex != 0
    ) {
      let temp = this.heap[parentIndex];
      this.heap[parentIndex] = num;
      this.heap[insertIndex] = temp;
      insertIndex = parentIndex;
      parentIndex = this.idxOfParent(insertIndex);
    }
    return this.heap[1];
  }

  /**
 * Extracts the min num from the heap and then re-orders the heap to
 * maintain order so the next min is ready to be extracted.
 * 1. Save the first node to a temp var.
 * 2. Pop last node off and overwrite idx1 with it.
 * 3. Iteratively swap the old last node that is now at idx1 with it's
 *    smallest child IF the smallest child is smaller than it.
 * - Time: O(log n) logarithmic due to shiftDown.
 * - Space: O(1) constant.
 * @returns {?number} The min number or null if empty.
 */
  extract() {
    /*
    * 1. Save the first node to a temp var.   ( this.heap[1] )
    * 2. Pop last node off and overwrite idx1 with it.   ( this.heap[this.heap.length-1] )
    * 3. Iteratively swap the old last node that is now at idx1 with it's
    *    smallest child IF the smallest child is smaller than it.
    */


  }


  // prints tree with root on left and index in parens in reverse inorder traversal
  printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
    if (parentIdx > this.heap.length - 1) {
      return;
    }

    spaceCnt += spaceIncr;
    this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
      `${this.heap[parentIdx]} (${parentIdx})`
    );

    this.printHorizontalTree(parentIdx * 2, spaceCnt);
  }

  printArr(...appendedMsgs) {
    const arrStr = `\n[${["null", ...this.heap.slice(1)].join(", ")}]`;
    const msgLen = arrStr.length + appendedMsgs.toString().length;
    console.log("-".repeat(msgLen), arrStr, ...appendedMsgs);
  }
}



// const testMinHeap = new MinHeap();
// testMinHeap.insert(5);
// testMinHeap.insert(4);
// testMinHeap.insert(7);
// testMinHeap.insert(3);
// testMinHeap.insert(6);

