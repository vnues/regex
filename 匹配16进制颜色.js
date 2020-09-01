/**
 * 如何进行匹配的
 * 感觉跟滑动窗口算法试着联想下
 */
const string = "#ffbbad \n#Fc01DF \n#FFF#ffE"

/**
 * 如果是const string = "#ffbbad#Fc01DF#FFF#ffE"
 * const regex = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g
 * 按道理应该可以进行匹配啊
 */
const regex = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/gm

/**
 * 注意^$什么时候写 什么时候不应该写
 * 全局匹配是这样的 当他匹配到了这个字符串后 如果要继续匹配 就是这个已经匹配好的字符串的下一个位置开始继续匹配
 * 继续按照这个regex规则继续进行匹配 如果此时加了^$那就加了严格的限制条记录
 * [ '#ffbbad', '#Fc01DF', '#FFF', '#ffE' ]
 */
console.log(string.match(regex))

/**
 * 学东西就是要认识相关概念的知识点才能记住
 * ^$匹配开头和结尾 所以我觉得全局匹配下不应该写这两个
 */