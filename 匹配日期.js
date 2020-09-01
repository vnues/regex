/**
 * 匹配是否是日期：
 * 比如 yyyy-mm-dd 格式为例
 */

const string = "2017-06-31"

/**
 * 正则本身就是匹配字符串比如/hello/ 所以/里面是字符啊/
 * 注意[]的表达的含义 字符组 
 */
const regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/

console.log(regex.test(string)) // true