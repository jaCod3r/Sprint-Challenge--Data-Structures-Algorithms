For each of the methods associated with each data structure, classify it based on its runtime, using Big O notation.

## Linked List

1.  What is the runtime complexity of `addToTail`?
    0(1)

    a. What if our list implementation didn't have a reference to the tail of the list in its constructor? What would be the runtime of the `addToTail` method?

2.  What is the runtime complexity of `removeHead`?
    0(1)

3.  What is the runtime complexity of `contains`?
    0(n)

4.  What is the runtime complexity of `getMax`?
    0(n)

## Queue

1.  What is the runtime complexity of `enqueue`?
    0(1)

2.  What is the runtime complexity of `dequeue`?
    0(1)

3.  What is the runtime complexity of `isEmpty`?
    0(1)

4.  What is the runtime complexity of `length`?
    0(n)

## Doubly Linked List

1.  What is the runtime complexity of `ListNode.insertAfter`?
    0(1)

2.  What is the runtime complexity of `ListNode.insertBefore`?
    0(1)

3.  What is the runtime complexity of `ListNode.delete`?
    0(1)

4.  What is the runtime complexity of `DoublyLinkedList.addToHead`?
    0(1)

5.  What is the runtime complexity of `DoublyLinkedList.removeFromHead`?
    0(1)

6.  What is the runtime complexity of `DoublyLinkedList.addToTail`?
    0(1)

7.  What is the runtime complexity of `DoublyLinkedList.removeFromTail`?
    0(1)

8.  What is the runtime complexity of `DoublyLinkedList.moveToFront`?
    0(1)

9.  What is the runtime complexity of `DoublyLinkedList.moveToBack`?
    0(1)

10. What is the runtime complexity of `DoublyLinkedList.delete`?
    0(1)

    a. Compare the runtime of the doubly linked list's `delete` method with the worst-case runtime of the `Array.splice` method. Which method generally performs better?

## Binary Search Tree

1.  What is the runtime complexity of `insert`?
    Θ(log(n))

2.  What is the runtime complexity of `contains`?
    Θ(log(n))

3.  What is the runtime complexity of `getMax`?
    Θ(log(n))

4.  What is the runtime complexity of `depthFirstForEach`?
    Θ(log(n))

5.  What is the runtime complexity of `breadthFirstForEach`?
    Θ(log(n))

6.  [Stretch Question] What is the runtime complexity of your `checkBalanced` function?

## Heap

1.  What is the runtime complexity of your `heapsort` function?
    O(n log(n))

2.  What is the space complexity of the `heapsort` function? Recall that your implementation should return a new array with the sorted data. What would be the space complexity if your function instead altered the input array?
    0(1)

3.  What is the runtime complexity of `bubbleUp`?
    O(n log(n))

4.  What is the runtime complexity of `siftDown`?
    O(n log(n))

5.  What is the runtime complexity of `insert`?
    O(n log(n))

6.  What is the runtime complexity of `delete`?
    O(n log(n))

7.  What is the runtime complexity of `getMax`?
    O(n log(n))
