#25. Reverse Nodes in k-Group
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

Example:

Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5

very similar with problem 24. but in this problem, the swap is not fixed in 2. so i changed the iterative, adding an array to store temp list. every time the temp array is equal the length of swap, then revert the temp, then add it to the list.


v2 https://leetcode.com/submissions/detail/150986936/ 100%
i changed the revert temp function to loop from end. then the speed is better now.



v1 https://leetcode.com/submissions/detail/150986205/ 93.33%