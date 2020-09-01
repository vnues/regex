/**
 * trim 方法是去掉字符串的开头和结尾的空白符
 */

function trim(string) {
    /**
     * 正则表达式中添加位置字符也是起到了限制过滤作用
     */
    return string.replace(/^\s+|\s+$/g, '')
}

console.log(trim("  foobar   "))