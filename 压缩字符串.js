/**
 * @name 压缩字符串
 * @description aaaabcccaaa => a4bc3a3 比较字符串长度 如果新的计数字符串长度大于原字符串的长度 返回原字符串的长度 反之返回新的字符串
 */

const reduceString = S => {
    const len = S.length;
    let [index, num, tmp] = [0 ,1, ''];
    while(index < len) {
        if(S.charAt(index) === S.charAt(index + 1)) {
            num ++
        }else {
            tmp += S.charAt(index)
            if(num >= 1) {
                tmp += num;
            }
            num = 1
        }
        index ++
    }
    if(tmp.length >= S.length) {
        return S;
    } else {
        return tmp;
    }
  };
  