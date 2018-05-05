#40. Combination Sum II(medium)
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:
```
Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
```
```
Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
```

very similar with problem 39. but it need unique combination. but i confuses first. is unique number, or unique index. 
i means if is unique number in example 2 is use two 2. if is unique index, it's lot's of same dupe on example 1. or. is means 1,1,6 or 6,1,1 are same option.

My solution is similar with problem 39. sort the input from small to bigger first.
set 3 temp variable. tempIndex for current check. resultIndex for result be checked, and start for loop start from.
then Iterative, for the first time, pass target, inputList,tempIndex(0),start(0),result (empty list).
in Iterate, loop from start index to end of input list, for each loop, check each item in the loop, call another Interative, target is passed in target - current item, start is start + 1,

if target is equal item. direct push in to result, and return the current iterate. if target is bigger than item. return current iterate. 

in this way, i can confirm the number is unique. 
then return the result.

