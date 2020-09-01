var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
var result = string.replace(regex, function (match, year, month, day) {
    console.log("打印了")
    /**
     * function参数值是返回分组（p1、p2、p3）
     */
    return month + "/" + day + "/" + year;
});
console.log(result);
  // => "06/12/2017"