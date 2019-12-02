function insertionsort(uarray){
    let sarray=[];
    for(let i=0;i<uarray;i++){
        let min = uarray[i];
        for(let j=0;j<uarray;j++){
            if(min>uarray[j]){
                min = uarray[j];
            }
        }
        sarray.push(min);
    }
}