#42. Trapping Rain Water
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!
<img src="http://www.leetcode.com/static/images/problemset/rainwatertrap.png">
Example:
```
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```

in my first thought. i think i need find the biggest number, and loop from 0 to the biggest, in each loop, loop the input array from first to end. count the first number bigger then the count, as start, then check the second bigger number as finish index. then cound the gap between start and end. set start as finish, and finish to -1. 
then count all of the number. that's the all water can be keeped.

but it failed by time. in test 314, i tried in local, it spemd 3400 ms +. so i think i may got less effective.

in other way. the water can be contain for each column, is based for the min between heightest column of left and right. and - height of the column self.

work on  v1 but need more improvement.
