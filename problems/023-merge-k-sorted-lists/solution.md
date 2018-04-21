#23. Merge k Sorted Lists (hard)

Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
```
Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6

```

this is hard level, but i dont think it's hard XD.

the input is an array of linke list. and the out put request is an array of val of each item in the link list from input, and the order of the result should be asc.

my first intuitively solution is, create a helper function, put all the value for each link list to another list. then sort the list. then return.




2018-4-21
v1 https://leetcode.com/submissions/detail/150979947/
beats 98.40% javascript. ok for now.