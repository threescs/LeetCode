var fisrtUniqChar = function(str) {
    if(str.length < 0 || str.length > 50000) return " ";
    var map = {};
    for(let i = 0; i < str.length; i++) {
        if(!map[str[i]]) {
            map[str[i]] = 1;
        } else {
            map[str[i]]++;
        }
    }
    for (let i = 0; i < str.length; i++) {
        if(map[str[i]] === 1) {
            return str[i];
        }
    }
    return " ";
}