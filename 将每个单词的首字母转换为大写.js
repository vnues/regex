/**
 * 思路是找到每个单词的首字母 
 */


function titleize(str) {
    /**
     * 匹配捕获 捕不捕获无所谓了
     * 该正则匹配出开头的首个字母和后面空格+首字母
     */
    return str.toLowerCase().replace(/(?:^|\s+)\w/g, function (c) {
        console.log(c)
        return c.toUpperCase();
    });
}
console.log(titleize('my name is epeli'));
// => "My Name Is Epeli"