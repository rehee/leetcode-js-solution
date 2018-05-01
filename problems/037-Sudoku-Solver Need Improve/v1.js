/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    test(board)
};



function test(board){
  let baseList = ["1","2","3","4","5","6","7","8","9"];
  let lists = [];
  for(let r = 0;r<9;r++){
    for(let c = 0;c<9;c++){
      if(board[r][c]=='.'){
        lists.push({
          r:r,
          c:c
        });
      }
    }
  }
  let result = [];
  getNumber(baseList,board,lists,result)
  if(result.length>0){
      for(let r of lists){
          board[r.r][r.c] = result[0][r.r][r.c];
      }
  }
}

function getNumber(base,board,list,result){
  if(list.length==0){
    return;
  }
  let current = list[0];
  let avaliable = getPossiable(base,current.r,current.c,board);
  if(avaliable.length<0){
    return;
  }if(list.length==1){
      for(let a of avaliable){
        board[current.r][current.c] = a; 
        result.push(board);
      }
      return;
  }
  if(list.length>1){
    for(let ava of avaliable){
      let newBoard = [
          board[0].map(b=>b),
          board[1].map(b=>b),
          board[2].map(b=>b),
          board[3].map(b=>b),
          board[4].map(b=>b),
          board[5].map(b=>b),
          board[6].map(b=>b),
          board[7].map(b=>b),
          board[8].map(b=>b),
      ];
      newBoard[current.r][current.c] = ava;
      let newList = list.filter((b,index)=>index>0);
      getNumber(base,newBoard,newList,result);
    }
  }
}


function getPossiable(base,r,c,board){
  let row = getAvaliableRow(base,r,c,board);
  let col = getAvaliableCol(base,r,c,board);
  let cell = getAvaliableCell(base,r,c,board);
  let count = {
    "1":0,
    "2":0,
    "3":0,
    "4":0,
    "5":0,
    "6":0,
    "7":0,
    "8":0,
    "9":0,
  };
  for(let i of row){
    count[i]++;
  }
  for(let i of col){
    count[i]++;
  }
  for(let i of cell){
    count[i]++;
  }
  let result = [];
  for(let item of base){
    if(count[item]==3){
      result.push(item);
    }
  }
  return result;
}


function getAvaliableRow(base,r,c,board){
  if(board[r][c]!='.'){
    return [board[r][c]];
  }
  mapper = {
    "1":false,
    "2":false,
    "3":false,
    "4":false,
    "5":false,
    "6":false,
    "7":false,
    "8":false,
    "9":false,
  }
  let row = board[r];
  for(let i of row){
    if(mapper[i]===false){
      mapper[i]=true;
      continue;
    }
    if(mapper[i]===true){
      return [];
    }
    
  }
  let result = [];
  for(let i of base){
    if(mapper[i]===false){
      result.push(i);
    }
  }
  return result;
  
}

function getAvaliableCol(base,r,c,board){
  if(board[r][c]!='.'){
    return [board[r][c]];
  }
  let col = [board[0][c],board[1][c],board[2][c],board[3][c],board[4][c],board[5][c],board[6][c],board[7][c],board[8][c]];
  mapper = {
    "1":false,
    "2":false,
    "3":false,
    "4":false,
    "5":false,
    "6":false,
    "7":false,
    "8":false,
    "9":false,
  }
  for(let i of col){
    if(mapper[i]===false){
      mapper[i]=true;
      continue;
    }
    if(mapper[i]===true){
      return [];
    }
    
  }
  let result = [];
  for(let i of base){
    if(mapper[i]===false){
      result.push(i);
    }
  }
  return result;
  
}
function getAvaliableCell(base,r,c,board){
  if(board[r][c]!='.'){
    return [board[r][c]];
  }
  let row = Math.floor((r)/3);
  let col = Math.floor((c)/3);
  let cell = [];
  for(let ri = row*3;ri<(row+1)*3;ri++){
    for(let ci = col*3;ci<(col+1)*3;ci++){
      cell.push(board[ri][ci]);
    }
  }
  mapper = {
    "1":false,
    "2":false,
    "3":false,
    "4":false,
    "5":false,
    "6":false,
    "7":false,
    "8":false,
    "9":false,
  }
  for(let i of cell){
    if(mapper[i]===false){
      mapper[i]=true;
      continue;
    }
    if(mapper[i]===true){
      return [];
    }
    
  }
  let result = [];
  for(let i of base){
    if(mapper[i]===false){
      result.push(i);
    }
  }
  return result;
  
}