
/**
 * 分组后面允许有两次 但是这个分组最后捕获的数据是最后一次匹配的
 * 要先理解 这里只有一个分组
 */
const regex = /(\d)+ \1/;
const regex1 = /(\d)+ \2/;
console.log(regex.test("12345 1"));
// => false
console.log(regex.test("12345 5"));
  // => true