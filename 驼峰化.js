/**
 * 根据-转换大写
 * 原理 找到-_空格前面的首字母然后替代
 * replace是匹配了这个规则 就走回调的function形式 返回值作为替换匹配得到的结果
 */

function camelize(str) {
    /**
     * 注意 . *根本不是比较的概念 一个是通配符 一个是量词 量词通常跟在字符后面的
     * 别混淆了
     */
    return str.replace(/[-_\s]+(.)?/g, function (match, c) {
        return c ? c.toUpperCase() : ''
    })
}

console.log(camelize('-moz-transform  -webkit-'))