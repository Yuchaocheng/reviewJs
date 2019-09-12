// 数值、字符串、布尔值这三种类型，合称为原始类型（primitive type）的值.即它们是最基本的数据类型，不能再细分了。
// 象则称为合成类型（complex type）的值，因为一个对象往往是多个原始类型的值的合成，可以看作是一个存放各种值的容器。
// ndefined和null，一般将它们看成两个特殊值。但对null使用typeof，会输出object
(()=>{
    console.log(typeof null); //object
    console.log(Object.prototype.toString.call(null)); //[object Null]
})()

//判断数据类型主要方法：typeof；instanceof；Object.prototype.toString

function typeofFun(){
    //typeof 数值、字符串、布尔值分别返回number、string、boolean。
    function f(){}
    console.log(typeof f); //function
    console.log(typeof undefined); //undefined
    //利用typeof 一个为定义对值不会报错可以用来判断一个不确定是否定义过对值。
    console.log(typeof a);//undefined 而不会报错
    console.log(typeof {});//object
    console.log(typeof []);//object 数组本质上是特殊对对象。typeof无法区分对象和数组。
    console.log(typeof null);//object
    /* 
    null的类型是object，这是由于历史原因造成的。1995年的 JavaScript 语言第一版，只设计了五种数据类型（对象、整数、浮点数、字符串和布尔值），没考虑null，只把它当作object的一种特殊值。后来null独立出来，作为一种单独的数据类型，为了兼容以前的代码，typeof null返回object就没法改变了。
    */
}
typeofFun()