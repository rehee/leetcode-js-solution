#38. Count and Say (easy)
The count-and-say sequence is the sequence of integers with the first five terms as following:
```
1.     1
2.     11
3.     21
4.     1211
5.     111221
```
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.
Example 1:
```
Input: 1
Output: "1"
```
Example 2:
```
Input: 4
Output: "1211"
```

This question was in some IQ test, give you a list and let you calculate the next. 
what i did, is save the pre answer in temp variable, and 2 loop, first loop from 1 to the target number. second loop is loop the temp string, count them as the require. then update the temp variable. finally return the temp value  as result.
