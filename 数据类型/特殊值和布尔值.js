// null & undefined
// null与undefined都可以表示“没有”，含义非常相似。将一个变量赋值为undefined或null，老实说，语法效果几乎没区别。
(()=>{
    // undefined 和 null 在if判断里都是false。这是肯定的。
    if (!undefined) {
        console.log('undefined is false');
    }
    if (!null) {
        console.log('null is false');
    }
    console.log(null == undefined); //true
    // 两者确实非常相似。为什么要同时设置两个这样的值，是因为历史原因。 
    console.log(Number(null)); // 0
    console.log(Number(undefined)); // NaN

    // null 和 undefined 的理解
    /* 
      null表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入null，表示该参数为空。
      比如，某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那么这个参数就会传入null，表示未发生错误。
    */
   //undefined表示“未定义”，下面是返回undefined的典型场景。
   var a;console.log(a); //定义了变量但未赋值。
   function f(x){console.log(x)};f()//调用函数时，应该提供但参数未提供。
   var a = {};console.log(a.x);// 对象没有赋值的属性
   console.log(f());//函数没有返回值，默认范围undefined。
})

//布尔值：布尔值代表“真”和“假”两个状态。“真”用关键字true表示，“假”用关键字false表示。布尔值只有这两个值。
//下列运算符会返回布尔值
/* 
1.前置逻辑运算符： ! (Not)
2.相等运算符：===，!==，==，!=
3.比较运算符：>，>=，<，<=
*/

//如果JS预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为false，其他值都视为true。
/* 
    1. undefined
    2. null
    3. ''
    4. 0
    5. false
    6. NaN
*/
// 空对象和空数组都转为true。