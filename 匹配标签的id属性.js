const string = '<div id="container" class="main"></div>'
/**
 * 正则进行贪婪匹配之前
 * 我觉得会先扫描判断是否能够匹配更多
 * 比如"container" class="main" 也是符合正则里面写的规则
 */
const regex = /id=".*"/
console.log(string.match(regex))

/**
 * 只能匹配上就点到为止
 */
const regex1 = /id=".*?"/g
/**
 * 加不加g全局匹配返回值差别很大
 */
console.log(string.match(regex1))
