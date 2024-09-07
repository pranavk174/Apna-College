let arrow = (arr =>{
    let newarr =[];
    let final = 0;
    let s = arr.length
    for( let i =0;i< arr.length;i++){
            newarr[i] = Math.pow(arr[i],2);
            final += newarr[i];
    }
    let avg = final / s;
    return avg;
})

let arr = [3,1,6,2,9,7];
console.log(arrow(arr))