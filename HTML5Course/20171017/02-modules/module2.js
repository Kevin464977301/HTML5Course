var module1 = require('./module1.js');
var m1 = require('./m1');
//可以引入自定义的模块，系统模块，第三方模块
console.log(module1);
module1.hi();
console.log(module1.abc);
m1.hello();
