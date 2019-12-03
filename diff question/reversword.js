const reversword1 = function(str){
    return str.split('').reverse().join('');
}

const reversword2 = function(str){
    let charArray = str.split('');
    let reverse ='';
    for(let ch of charArray){
        reverse=ch+reverse;
    }
    return reverse;
}

const reverseword3 = function(str){
    return str.split('').reduce((rev,ch)=>{
        return rev = ch+rev;
    },'')
}

