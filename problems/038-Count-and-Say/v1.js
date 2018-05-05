var countAndSay = function(n) {
    let temp = "";
    for(let i = 1;i<n+1;i++){
        if(temp==''){
            temp="1"
        }
        if(i==1){
            continue;
        }
        let that = "";
        let count = 0;
        let thisList = [];
        for(let index = 0;index<temp.length;index++){
            if(that == ""){
                that = temp[index];
                count =1;
                continue;
            }
            if(that == temp[index]){
                count ++;
            }else {
                thisList.push(count);
                thisList.push(that);
                that = temp[index];
                count = 1;
            }
        }
        thisList.push(count);
        thisList.push(that);
        temp = thisList.join('');
    }
    return temp;
};