


function quickSort(array,left,right){
    let len = array.length;
    let pivot;
    let partitionIndex;
    if(left<right){
        pivot = right
        partitionIndex = partition(array,pivot,left,right);
        quickSort(array,left,partitionIndex-1);
        quickSort(array,partitionIndex+1,right);
    }
    return array;
}



function partition(array,pivot,left,right){
    let pivotvalue = array[pivot];
    let partitionIndex = left;
    for(let i=left;i<right;i++){
        if(array[i]<pivotvalue){
            swap(array,i,partitionIndex);
            partitionIndex++;
        }
    }
    swap(array,right,partitionIndex);
    return partitionIndex;
}



function swap(array,firstIndex,secondIndex){
    let temp = array[secondIndex];
    array[secondIndex] = array[firstIndex];
    array[firstIndex] = temp; 
}