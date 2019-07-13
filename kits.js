//常用的js代码
var kits = {};
//获取一个区间的一个随机整数
kits.randomInt = function (n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
}