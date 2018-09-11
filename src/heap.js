/* eslint-disable */
/* ***********
Binary heaps may be represented in a very space-efficient way using an array alone, and do not require pointers 
between elements. After an element is inserted into or deleted from a heap, the heap property may be violated and
the heap must be balanced by internal operations. The first (or last) element will contain the root. The next two elements of 
the array contains its children. The next four contain the four children of the two child nodes, etc. Thus the children of the
node at position 'n' would be at poistions '2n' and '2n + 1' in a one-based array, or '2n + 1' and '2n + 2' in a zero-based
array. This allows moving up or down the tree by doing simple index computations. Balancing a heap is done by sift-up or sift-down
operations (swapping elements which are out of order). As we can build a heap from an array without requiring extra memory (for the
nodes, for example), heapsort can be used to sort an array in-place. (https://en.wikipedia.org/wiki/Heap_(data_structure)) 
******************/
/*************
 Heaps are commonly implemented with and Array. An binary tree can be stored in an array, but because a binary heap is always a complete 
 binary tree, it can be stored compactly. No space is required for 'pointers'; instead, the parent and children of each node can be found by 
 arithmetic on array indices. These properties make this heap implementation a simple example of an 'implicit data structure' or 'Ahnentafel' 
 list.  
 Let n be the number of elements in the heap and 'i' be an arbitrary valid index of the array storing the heap. If the tree root is at index 0, 
 with valid indices 0 through n-1, then each element 'a' at index 'i' has:
 # children at indices: 2i+1 and 2i+2
 # its parent at index: floor((i-1)/2)
 ************/
class Heap {
    constructor() {
        this.storage = [null];
        this.size = 0;
    }
    // Inserts the given value in the heap
    // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
    insert(val) {

    }

    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    delete() {

    }

    // Returns the maximum value in the heap in constant time
    getMax() {
        return this.storage[0];
    }

    // Returns the size of the heap
    getSize() {
        return this.size;
    }

    // Returns the storage array
    getStorage() {
        return this.storage;
    }

    // Moves the element at the specified index "up" by swapping it with its parent 
    // if its parent value is less than the value located at the input index
    // This method is only used by the heap itself in order to maintain the heap property
    bubbleUp(index) {

    }

    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    siftDown(index) {
      
    }
}

module.exports = Heap;
