#26. Remove Duplicates from Sorted Array (easy)
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

I did this on my phone when i am boring on the train XD
that's very easy problem when i thought.
the first thought is create an new empty array, and a temp variable to store the max number. then loop the input array, cause the input array is sorted, so for each item in the array, compare with the temp variable. if the temp is null, then set the first item in input array for it. then if the following item is begger then the temp, means new item. then set the temp variable with new value, then puth in to array I ready for result.

then i got the list with no duplicate number.

when i just return the value of list length. they tell me error. cause it only checked the input array. so i can only do the loop again. pop the dupe item based on theno dupe array.

https://leetcode.com/submissions/detail/151183885/ 99.88%