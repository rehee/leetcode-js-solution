#762. Prime Number of Set Bits in Binary Representation (easy)
Given two integers L and R, find the count of numbers in the range [L, R] (inclusive) having a prime number of set bits in their binary representation.

(Recall that the number of set bits an integer has is the number of 1s present when written in binary. For example, 21 written in binary is 10101 which has 3 set bits. Also, 1 is not a prime.)

on train with same day 26 to 28

that's easy.

i just thought convert to binary, then count how many 1 then check is prime number. then count the ammount. job done.

v1 https://leetcode.com/submissions/detail/151190105/ 30

v1 is too slow. i think may be spend lot's of time on calculate prime number. cause the max number is set. so the max of binary 1 is set as well. may be i create a mapper can improve speed.

v2 speed is not increased. 
so i think maybe the speed is i spend lot's of calculate on convert to binary and convert to string and remove '0'.
if i use shift command, remove 1 from binary direct, if removed all 1, the number will be 0. they may quack.

v3 https://leetcode.com/submissions/detail/151195291/ 100