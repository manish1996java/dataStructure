function mergesort(unsortedArray=[]){
    if(unsortedArray.length<1){
        return unsortedArray;
    }

    let mid = Math.floor(unsortedArray.length/2);
    let left = unsortedArray.slice(mid);
    let right = unsortedArray.slice(0,mid);

    return merge(left,right);
}

function merge(left,right){
    let resultarry = []
    let leftindex = 0;
    let rightindex = 0;

    while(leftindex < left.length && rightindex < righ.length){
        if(left[leftindex]<right[rightindex]){
            resultarry.push(left[leftindex]);
            leftindex++;
        }else{
            resultarry.push(right[rightindex]);
            rightindex++
        }
    }
    
    return resultarry
        .concat(left.slice(leftindex))
        .concat(right.slice(rightindex));

}