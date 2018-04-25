var nextPermutation = function(nums) {
    let list = nums.map(b=>b);
    list.sort((a,b)=>b-a);
    let mapper = {};
    let count = 0;
    let temp = null;
    let length = nums.length;
    let weight = 0;
    let max = 0;
    for(let i =0;i<nums.length;i++){
        weight = weight + nums[i]*(10**(length-i-1));
        max = max + list[i]*(10**(length-i-1));
    }
       if(max==weight){
           nums.sort((a,b)=>a-b);   
           return;
       }
       let l2 = [];
       allCombine(nums,l2,'',0);
       l2.sort((a,b)=>a.sum-b.sum);
       let l3 = l2.filter(b=>b.sum>weight)[0];
       for(let i =0;i< l3.list.length;i++){
           nums[i] = Number(l3.list[i]);
       }
       console.log(nums);
   };
   
   function allCombine(list,combine,temp,sum){
       if(list.length>1){
           for(let i =0;i<list.length;i++){
               let thisSum = sum + list[i]*(10**(list.length-1));
               allCombine(list.filter((b,index)=>index!=i),combine,`${temp}${list[i]}`,thisSum)
           }    
           return;
       }
       let l = temp.split('');
       sum = sum + list[0];
       l.push(list[0]);
       combine.push({list:l,sum:sum});
   }