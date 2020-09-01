/**
 * 匹配时间 时分秒毫秒
 */
const string = "23:59"
const regex = /^([01][0-9]|2[0-3]):[0-5][0-9]$/

console.log(regex.test(string))