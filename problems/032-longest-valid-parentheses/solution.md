#32. Longest Valid Parentheses (hard)

Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

this question is very similar with previous pare bracket. 
my first thought is count based on close, checked the longest successed pare. but I found an no correct type like ()((). and i try both close/open mark and try count the min length of these 2. but it's still not perfect

and i turnd my thought form the previous problem,
create an emptry list 
loop though the string
```
))((()()
and make an object {left:"",right:""}
if the item for the loop is open bracker, create new object left is ( and pushed in to list;
if the item  is closed mark, loop the list from last to first to check is any object has free right property. 
if has, changed right to close. if not create an object {left:'':right:')'} and pushed in to list;
as this string. the list should be 
[
    {left:'',right:')'},
    {left:'',right:')'},
    {left:'(',right:''},
    {left:'(',right:''},
    {left:'(',right:')'},
    {left:'(',right:')'},
]
loop though the list, and count the max continued object with both left and right


```  