var width="200px";
width=parseInt(width)+300+"px";
console.log(width);
////这个是后面转换的,不太正确
//var num=prompt("请输入你的薪资");
//num=parseInt(num)+10000;
//alert("以后的工资:"+num);
////将得到的数据转换为整数
//var money=parseInt(prompt("请输入你现在的工资:"));
//money=money+1000;
//alert("下个月的工资:"+money);

console.log(parseFloat("192.168.1.1"));
var n = 10; 
//var l = n++ + ++n + n++ + ++n + n++;
//console.log(l);
var m= n++ + --n + --n - --n + n-- + ++n;
console.log(m);
console.log(n);
console.log("秦".charCodeAt());
console.log("凯".charCodeAt());
console.log("华".charCodeAt());

console.log("邓".charCodeAt(),"浩".charCodeAt());
console.log("邓浩是不是">"sb?");
console.log(5+"5">"51");

//var num=parseInt(prompt("请输入数字"));
//console.log("是不是奇数?"+(num%2==1));

isNaN("");
isNaN("true");
isNaN(true);
console.log(""=="");
console.log(""==NaN);
console.log(isNaN(" "));