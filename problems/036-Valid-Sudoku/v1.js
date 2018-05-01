var isValidSudoku = function(board) {
    return test(board);
};

function test(input) {
  for(let i = 0;i<9;i++){
    let isValid = GetIsValid(input[i]);
    if(isValid == false){
      return false;
    }
  }
  
  for(let i = 0;i<9;i++){
    let isValid = GetIsValid([
      input[0][i],
      input[1][i],
      input[2][i],
      input[3][i],
      input[4][i],
      input[5][i],
      input[6][i],
      input[7][i],
      input[8][i],
    ]);
    if(isValid == false){
      return false;
    }
  }

  for(let i = 0;i<9;i=i+3){
    for(let i2 = 0;i2<9;i2=i2+3){
      let isValid = GetIsValid([
        input[i+0][i2+0],
        input[i+0][i2+1],
        input[i+0][i2+2],
        input[i+1][i2+0],
        input[i+1][i2+1],
        input[i+1][i2+2],
        input[i+2][i2+0],
        input[i+2][i2+1],
        input[i+2][i2+2],
      ]);
      if(isValid == false){
        return false;
      }   
    }
  }

  return true;
}

function GetIsValid(list){
  let dupeMapper = {
    "1":0,
    "2":0,
    "3":0,
    "4":0,
    "5":0,
    "6":0,
    "7":0,
    "8":0,
    "9":0,
    ".":-1,
  }
  for(let i = 0;i<list.length;i++){
    if(dupeMapper[list[i]]==0){
      dupeMapper[list[i]]++;
      continue;
    }
    if(dupeMapper[list[i]]>0){
      return false;
    }
  }
  
  return true;
}