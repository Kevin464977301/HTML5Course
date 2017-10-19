var haha = "hambuger";
console.log(haha);
document.write("<h1>邓浩,哈哈!</h1>");
var a = "豪华午餐";
var b = "可乐";
var c = "巨无霸";
document.write("<h1>" + a + "</h1>");
console.log(b);
document.write(c);
//自动申明d为变量
d=100;
document.write(d);
//undefined 不会报错,将变量申明提前
console.log(e);
var e=22;
//报错 ReferenceError   not defined
//document.write(f);

//常量 一旦声明不能更改
const A = 3.14;
var deg = 30*A/180;
console.log(deg);
console.log(deg.toFixed(2));
//转换成二进制
var num=100000000000;
console.log(num.toString(2));

var money=2;
var apple=1.6;
console.log(money-apple);//计算机得到的结果是0.39999999999999999999
console.log((money-apple).toFixed(2));//需要去截取小数点后的几位数来四省五入

var ss="a";
console.log(ss.charCodeAt(0).toString(2));//二进制incode
console.log(ss.charCodeAt(0).toString(10));//十进制incode

var str1="hello",str2="world";
var str=str1+str2;
console.log(str);

var faleg=true;
var c;
var d = null;
//typeof 判断数据类型
console.log(typeof d);
