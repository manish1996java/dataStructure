function selectionsort(array=[]){
    const length = array.length;
    for(let i=0;i<length;i++){
        let min = i;
        for(let j=i+1;j<length;j++){
            if(array[j]<array[min]){
                min = j;
            }
        }
        temp = array[i];
            array[i] = array[min];
            array[min] = temp;
    }
    return array;
}


