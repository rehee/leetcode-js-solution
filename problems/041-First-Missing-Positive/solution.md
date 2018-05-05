#41. First Missing Positive(hard)
Given an unsorted integer array, find the smallest missing positive integer.
Example 1:
```
Input: [1,2,0]
Output: 3
```
Example 2:
```
Input: [3,4,-1,1]
Output: 2
```
Example 3:
```
Input: [7,8,9,11,12]
Output: 1
```

i dont know why is called hard.

my first solution is sort the input array, and loop the array, set a temp value to 1, and compare each of the item. increase the temp by 1 if the item is equal the temp. and jump to next different number. if next number is bigger than temp. then return temp. that's the missing number.

but i found the solutin is slow. Cause i sort the list, then loop the list. and compare each of them, and asign, increase temp. too complex.
I think any way i need check the number form 1 to the last one. so why i didn't just count the number and check is the number in the list. well. 
the second solution is 100% faster
