

function conQuer(arr,si,ei,mid){
    let idx1= si;
    let idx2= mid+1;
    let x = 0;
    let merged = [];

    while(idx1<=mid && idx2 <= ei ){
        if(arr[idx1]<=arr[idx2]){
            merged[x++]=arr[idx1++];
        }
        else{
            merged[x++]= arr[idx2++];
        }
    }


    while(idx1<=mid){
        merged[x]= arr[idx1];
        x++ , idx1++
    }
    while(idx2<=ei){
        merged[x]=arr[idx2]
        x++ , idx2++
    }

    for(let i=0,j=si;i<merged.length;i++,j++){
        arr[j] = merged[i];
    }
    return arr;
    
}
function divide(arr,si,ei){
    let mid =Math.floor( si + (ei-si)/2);
    if(si >= ei){
        return;
    }
    divide(arr,si,mid);
    divide(arr,mid+1,ei);
    conQuer(arr,si,ei,mid);

    return arr;
}
let arr =[1,4,2,7,9,0,8];
let n= arr.length;
let sorting =divide(arr,0,n-1);
console.log(sorting.join('-'))


