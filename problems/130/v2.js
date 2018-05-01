/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    test(board); 
};

function test(board){
  if(board.length==0){
      return;
  }
  let r = board.length;
  let c = board[0].length;
  for(let i = 0;i<r;i++){
    if(board[i][0] == 'O'){
      check(board, i, 0, r, c);
    }
    if(board[i][c - 1] == 'O'){
      check(board, i, c-1, r, c);
    }
  }
  for(let i = 0;i<c;i++){
    if(board[0][i] == 'O'){
    	check(board, 0, i, r, c);  
    }
    if(board[r - 1][i] == 'O'){
        check(board, r-1, i, r, c);
    }
  }
  for(let i=0; i<r; ++i){
        for(let j=0; j<c; ++j){
            if(board[i][j] == 'A')
                board[i][j] = 'O';
            else if(board[i][j] == 'O')
                board[i][j] = 'X';
        }
    }

}

function check(board,cr,cc,tr,tc){
  if((cr < 0) || (cr >= tr) || (cc < 0) || (cc >= tc)){
    return;
  }
  if(board[cr][cc] == 'O') {
     board[cr][cc] = 'A';
     check(board, cr-1, cc, tr, tc);
     check(board, cr+1, cc, tr, tc);
     check(board, cr, cc-1, tr, tc);
     check(board, cr, cc+1, tr, tc);
  }     

}

