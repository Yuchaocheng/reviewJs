// JS内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。所以，1与1.0是相同的，是同一个数。
// 这就是说JS 语言的底层根本没有整数，所有数字都是小数（64位浮点数）。
// 容易造成混淆的是，某些运算只有整数才能完成，此时 JS 会自动把64位浮点数，转成32位整数，然后再进行运算
(()=>{
    console.log(1===1.0);//true
    console.log(1===1.0000000000000);//true
    console.log(0.1+0.2===0.3); //false
    console.log(0.3 / 0.1); // 2.99999999
});

/* 
绝对值小于2的53次方的整数，都可以精确表示。
由于2的53次方是一个16位的十进制数值，所以简单的法则就是，JavaScript 对15位的十进制数都可以精确处理
JavaScript 提供Number对象的MAX_VALUE和MIN_VALUE属性，返回可以表示的具体的最大值和最小值。
*/
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//数字的科学计数法。总的理解e或E和紧跟它后面的数值组成的式子，代表10的数值次方。
(()=>{
    console.log(123e3);
    console.log(123e-3);
    console.log(-3.1E+12);
    console.log(.1e-23);
    // console.log(1e);报错
    // 以下两种情况，JavaScript 会自动将数值转为科学计数法表示，其他情况都采用字面形式直接表示。
    //（1）小数点前的数字多于21位。
    console.log(1234567890123456789012.232);
    console.log(123456789012345678901.12313);
    // （2）小数点后的零多于5个。
    // 小数点后紧跟5个以上的零，就自动转为科学计数法
     0.0000003 // 3e-7
   // 否则，就保持原来的字面形式
   0.000003 // 0.000003
});


//数值的进制
(()=>{
    
});
