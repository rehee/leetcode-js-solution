#43. Multiply Strings

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
Example 1:
```
Input: num1 = "2", num2 = "3"
Output: "6"
```
Example 2:
```
Input: num1 = "123", num2 = "456"
Output: "56088"
```
Note:

1. The length of both num1 and num2 is < 110.
2. Both num1 and num2 contain only digits 0-9.
3. Both num1 and num2 do not contain any leading zero, except the number 0 itself.
4. You must not use any built-in BigInteger library or convert the inputs to integer directly.

on the requirement, said no convert or bigNumber so i think i need arcive it by my self.
1. create a mapper with string and int.
2. on the requirement, thelength less than 110. that's means the leangth could be 109. but in java the int is limited to 2^^31 that's out of the range.
3. (a+b)*(c+d) = a*c + a*d + b*c+b*d so i split the long string in to short. for example 12345678 = 1234000+5678 = = 1234*(10^^4*10^^1)+5678*(10^^4*10^0) 
4. i put the split string in to array, and make the index to the multiple times
5. loop though all of them and add them up
7. return the result.  
