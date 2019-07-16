//常用的js代码
var kits = {};
//获取一个区间的一个随机整数
kits.randomInt = function (n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
}




//随机取颜色
function randomColor(){
	function randomInt(n,m){
	return Math.floor(Math.random() * (m - n + 1) +n);
}

function Color(){
	let r = randomInt(0,255);
	let g = randomInt(0,255);
	let b = randomInt(0,255);
	return 'rbg('+ r + ',' + g + ','+ b +')';
}
}