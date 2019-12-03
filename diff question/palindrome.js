const palindrome = function(str){
    return str.split('').every((ch,i)=>ch === str[str.length-1-i])
}