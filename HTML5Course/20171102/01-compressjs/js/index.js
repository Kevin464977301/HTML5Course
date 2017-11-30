function b(){}
function a(){}
console.log('1');
console.log('1');
console.log('1');
function demo () {
  console.log(arguments instanceof Array)
  // 第二种
  console.log(arguments.constructor === Array)
  // 第三种
  console.log(Object.prototype.toString.call(arguments) === '[object Array]')
  // 第四种
  console.log(Array.isArray(arguments))
}
demo()

function demo2 (arr) {
  console.log(arr instanceof Array)
  // 第二种
  console.log(arr.constructor === Array)
  // 第三种
  console.log(Object.prototype.toString.call(arr) === '[object Array]')
  // 第四种
  console.log(Array.isArray(arr))
}
demo2([1,2,3]);

var star = ['ucai', 'is', 'ucai'];
var num = star.indexOf('ucai');
console.log(num);
var num = star.lastIndexOf('ucai');
console.log(num);

/**
 * 我们实现indexOf方法
 * @arr 	原数组
 * @value 	遍历的成员
 * return 	索引值
 **/
function ucaiIndexOf(arr, value) {
  // 遍历arr
  for (var i = 0; i < arr.length; i++) {
    // 判断成员值是否与当前值全等
    if (arr[i] === value) {
      // 返回索引值
      return i
    }
  }
  // 如果没有获取到就返回-1
  return -1;
}
console.log(ucaiIndexOf(star, 'ucai'));


var arr = [1,2,3];
arr.fill('red');
console.log(arr);
var result1 = arr.fill(function () {
  return 1;
});
console.log(result1);

function fill (arr, value) {
  // 遍历数组
  for (var i = 0; i < arr.length; i++) {
    // 替换原位置的数据
    arr[i] = value
  }
  // 返回原数组
  return arr;
}
fill(arr, '222');
console.log(arr);
Array.prototype.ucaiFill = function (value) {
  // 访问数组。可以通过this
  // console.log(this.length)
  // 遍历数组
  for (var i = 0; i < this.length; i++) {
    // 给当前对象填充数据
    this[i] = value
  }
  // 我们要返回原数组
  return this;
}
console.log(arr.ucaiFill('111'));

/**
 * 定义Each方法遍历数组
 * @arr 	表示原数组
 * @fn 		回调函数
 **/
function each(arr, fn) {
  // 遍历数组
  for (var i = 0; i < arr.length; i++) {
    // 用回调函数处理每一个成员
    // fn(arr[i], i, arr)
    // 如果想让fn执行时作用域是arr，只需要更改作用域就可以了
    fn.call(arr, arr[i], i, arr)
  }
}
each(arr, function(item, index, arr) {
  console.log(item);
});



/**
 * 实现map方法
 * @arr 	原数组
 * @fn 		回调函数
 * return 	新数组
 **/
function map (arr, fn) {
  // 将每一次执行的结果保存，并返回
  var result = [];	// 返回结果的容器
  // 遍历数组并执行每一次循环
  for(var i = 0; i < arr.length; i++) {
    // 参数：value， index， arr
    result.push(fn.call(arr, arr[i], i, arr))
    // result[i] = fn(arr[i], i, arr)
  }
  // 循环执行之后，我们将结果返回
  return result;
}
var arr = [1,2,'3'];
var newArr = map(arr, function(item) {
  if (typeof item === 'string') {
    return +item;
  }
  return item;
});
console.log(newArr);


/**
 * 实现some方法
 * @arr 	原数组
 * @fn 		回调函数
 * return 	布尔值
 ***/
function some (arr, fn) {
  // 遍历数组
  for (var i = 0; i < arr.length; i++) {
    // 根据回调函数执行结果来判断
    if (fn(arr[i], i, arr)) {
      return true
    }
  }
  // 如果所有成员都不满足
  return false;
}
var arr = [2, 5, 8, 1, 4];
var result = some(arr, function(element, index, array) {
  //return element > 10;
  return element >= 8;
});
console.log(result);

function every (arr, fn) {
  // 对每一个成员执行一次回调函数，如果结果全部是真返回true
  // 如果有一个不满足条件就返回false
  for (var i = 0; i < arr.length; i++) {
    // 如果回到函数执行结果是false，就直接返回false
    if (!fn(arr[i], i, arr)) {
      return false
    }
  }
  // 如果全部满足条件， 返回true
  return true;
}
var arr = [1,2,'3'];
var result = every(arr, function(element, index, array) {
  return typeof element === 'number';
});
console.log(result);


/**
 * 实现filter方法
 * @arr 	原数组
 * @fn 		回调函数
 * return 	返回值
 **/
function filter(arr, fn) {
  // 循环数组，寻找符号条件的成员，并保存在一个新数组中
  // 定义一个数组容器
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    // 执行函数寻找成员
    if (fn(arr[i], i, arr)) {
      // 将值保存在result中
      result.push(arr[i])
    }
  }
  // 循环结束，将结果返回
  return result;
}
var arr = [1,2,'3'];
var result = filter(arr, function(element, index, array) {
  return typeof element === 'number';
});
console.log(result);

/**
 * 数组累积方法
 * @arr 	原数组
 * @fn 		回调函数
 * return 	累积的结果
 ***/
function reduce(arr, fn) {
  // 创建结果，执行循环，每一将循环的结果传递到下一次循环中，一次次累积，最终将结果返回
  // 第一次执行时累积的结果是第一个成员
  var result = arr[0];	// 定义返回结果
  // 循环是从第二个成员开始
  for (var i = 1; i < arr.length; i++) {
    // 执行fn得到结果,一次一次累积
    result = fn(result, arr[i], i, arr)
  }
  // 最终将结果返回
  return result;
}
var arr = [1,2,3];
var result = reduce(arr, function(sum, current) {
  return sum + current;
});
console.log(result);
