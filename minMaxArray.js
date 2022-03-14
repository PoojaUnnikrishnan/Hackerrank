function miniMaxSum(arr) {
    let a=arr.length;
    arr.sort(function(a, b){return a - b});
    let x = arr[0] + arr[1] + arr[2] +arr[3];
    let y = arr[a-1] + arr[a-2] + arr[a-3] +arr[a-4];
    console.log(x,y)
    }
    miniMaxSum([1,5,7,3,9]);