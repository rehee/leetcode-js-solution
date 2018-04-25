#029-divide-two-integers (medium)
Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.

my first thought is just devided and use Math.floor to get the number. compare with 2**32.

v1 https://leetcode.com/submissions/detail/151433105/ 98.80

may be math.floor / math.ceil take too many resource, i can use a while loop to dividend - divisor till dividend is just over 0, then return the count time. if the time is over limited just break the loop.

but they need think about the combinithon dividend and divisor positive or negtive, totally 4 combintion. and plus 0.

the code may harder to maintain and read. just may be 10 ms faster. so i didn't archive the code. if i have time maybe.