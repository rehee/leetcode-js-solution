#37. Sudoku Solver (hard)

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
Empty cells are indicated by the character '.'.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png" />
<img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png">

I start thought how to solve the sudoku after problem 36 valid sudoku.

my first solution, is create a help method, give the row,col index and board. to get avaliable number list.

then loop though the board. get the list of row,col index need be filled. 
then create an Iteration function, passed the board, list of row,col, check the avaliable numbers of first item in list, if the avaliable number is none, then the sudoku is not valid solution. if there are avaliable number, for each of the number, filling in the board, and passed the board, and rest of the list to Iteration. untill get the solution or not valid.

got the solutin, but not effition. spend lot's of time to generate new board, and new list. and every time, check row,col,and 3x3 cell to get avaliable number
i think this one is around O(3n + 3n^4)