/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    for(var i = 1; i < word.length; i++) {
        if(word[0] >= 'a' && word[0] <= 'z') {
            // 假若是b 可通过 / 大写都不能通过
            if(word[i] < 'a' || word[i] > 'z') {
                return false;
            }
        } else if(word[1] >= 'a' && word[1] <= 'z') {
            // 开头可大写, 后面必全部小写
            if(word[i] < 'a' || word[i] > 'z') {
                return false
            }
        }else {
            if(word[i] < 'A' || word[i] > 'Z') {
                return false
            }
        }
    }
    return true
};