
var vowels = function(str){
    var count = 0;
    var vow = 'aeiou'.split('');
    for(let ch of str){
	console.log(ch);
        if(vow.includes(ch)){
            console.log('yes');
			count++;
        }
    }
	return count;
}
