#34. Search for a Range
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

the reason the input list is sorted, so just check the first one less then the target, and first one bigger the target.
loop from first to end. the best is O(1) the worist is O(n);
