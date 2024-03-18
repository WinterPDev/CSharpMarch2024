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
class MinHeapBasic {
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
    // i == index of child node
    return Math.floor(i / 2);
  }

  /**
   * @param {number} i
   */
  idxOfLeftChild(i) {
    // i == index of parent node
    return i * 2;
  }

  /**
   * @param {number} i
   */
  idxOfRightChild(i) {
    // i == index of parent node
    return i * 2 + 1;
  }

  /**
   * Swaps two nodes.
   * @param {number} i
   * @param {number} j
   */
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }


  /**
   * Retrieves the top (minimum number) in the heap without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {?number} Null if empty.
   */
  top() {
    // Your Code Here
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
    // Your Code Here~
    // Since we are swapping, we'll want to use some temp variables to avoid losing any data.
    // A while loop is a good idea, so think of what logic to use for it. 
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



// const testMinHeap = new MinHeapBasic();
// testMinHeap.insert(5);
// testMinHeap.insert(4);
// testMinHeap.insert(7);
// testMinHeap.insert(3);
// testMinHeap.insert(6);

