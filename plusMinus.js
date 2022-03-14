function plusMinus(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    let len=arr.length;
    for (let i=0; i< len; i++){
        if (arr[i]>0){
            positiveCount++;
        }else if(arr[i] === 0){
            zeroCount++;    
        }else{
            negativeCount++;
        }
    }
let x= (positiveCount/len).toFixed(6);
let y= (negativeCount/len).toFixed(6);
let z=(zeroCount/len).toFixed(6);
console.log(x);
console.log(y);
console.log(z);

}
plusMinus([1,-1,1,0,-1])