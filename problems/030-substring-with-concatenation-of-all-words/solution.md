#30. Substring with Concatenation of All Words (hard)

You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

that's hard. But i didn't think that's hard for first time.

the first solutin, is i get all words combiniatin, then loop though the check words. and see how many in there.

v1 out of memory. the error message is out of memory!!!. may be the Recursion take too much memory on create array.

ok, i changed my method, 

on v1, i get all the word combiniation first then check. now i use while loop to check all combination. if any of combinatin match, break loop.
then out of time again. they speed about 9000 ms on 10000 length check.

and changed the method again.

v2 

2 loops, first loop is out side loop, loop all substring for check.

then for each string, do double loop. outer loop is loop though all checked words. second loop is for this words, the postion should be. if no matched, return false break inner and outer loop. the substring check loop continue for next one.
if is matched in some posion, removed the matched substring form checked string, then breck the inner loop. outer loop for next one. if all the string matched. the combinition count plus one.

https://leetcode.com/submissions/detail/151448525/ 82.35
