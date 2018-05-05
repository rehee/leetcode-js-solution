#39. Combination Sum(medium)
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

```
Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
```
Example 2:

```
Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```

first solutin is very easy. just grap all combinations from input. then check each of them. if is equal target. put the combination in to list. then return the list as result. but the problem is what's the end of the combination.
so i sort the input list from small to larger. then if the all smalest combinatin is bigger then target, that's means there is the end. and if the combinatin bigger than target, that's means start a new loop.

but this way is spend too much time. not very effiectioin. I should imporove some time.