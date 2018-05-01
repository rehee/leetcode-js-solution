/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let mapper = {};
    mapper[')']=true;
    let openB = {};
    openB['(']=true;
    let fullb = {};
    fullb['()']=true;
    let length = s.length;
    let list = [];
    for(let i =0;i<length;i++){
        let item = s[i];
        if(mapper[item]){
            let newL = true;
            for(let i2=list.length-1;i2>=0;i2--){
                if(openB[list[i2]]){
                    
                    list[i2]="()";
                    newL=false;
                    break;
                }
            }
            if(newL){
                list.push(item)
            }
            
        }else{
            list.push(item)
        }
    }
    let count = 0;
    let result = 0;
    for(let item of list){
        if(fullb[item]){
            count=count+2;
            
        }else{
            if(result<count){
                result = count;
            }
            count = 0;
            if(result>length/2){
                break;
            }
        }
    }
    if(result<count){
        result = count;
    }
    return result;
    
};