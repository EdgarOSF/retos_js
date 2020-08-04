/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = arr => {
    
    let acc = 0;
    let res = [];

    for( i = 0 ; i < arr.length ; i++){
        acc += arr[i];        
        res.push(acc);
    }
   
    return res;
};

console.log(runningSum([1,2,3,4]));
console.log(runningSum([1,1,1,1,1]));
console.log(runningSum([3,1,2,10,1]));

