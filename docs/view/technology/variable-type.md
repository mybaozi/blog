# 数据类型

javascript中的变量类型一般可以分为两类，原始类型和引用类型。  

__原始类型：__   
* <font color=green>number</font>  
* <font color=green>string</font>  
* <font color=green>boolean</font>  
* <font color=green>null</font>  
* <font color=green>undefined</font>  
* <font color=green>symbol</font>  
* <font color=green>bigint</font>  
 
__引用类型：__
* <font color=green>object</font>  
* <font color=green>function</font>  


__类型判断：__  

原始类型中除了 `null` 以外都可以通过 `typeof` 判断类型。  
判断变量类型是否为 `null` 可以直接通过 ` value === null ` 判断。  
另外 `function` 也可以通过 `typeof` 判断，对于 `function` 以外的其他引用类型变量使用 `typeof` 得到的值均为 `object`  

```js
    console.log(typeof null) // object
    console.log(typeof Number.toString) // function
```

判断 `Array` `Date` `RegExp` `Map` `Set` 等构造函数创建的引用类型变量，使用 `typeof` 都只能得到 `object`  
想要判断具体是哪种构造函数生成的可以通过 `instanceof` 判断

```js
    new Date() instanceof Date // true
    new Array() instanceof Array // true
    new RegExp() instanceof RegExp // true
    ···
```

另外以上引用类型的变量通过 `instanceof` 与 `Object` 作比较可发现他们的值也是 `true`  
那是因为 `instanceof` 是通过判断该构造函数的原型是否在该对象变量的原型链上

```js
    new Date() instanceof Date // true
    (new Date()).__proto__ === Date.prototype // true
    new Date() instanceof Object // true
    (new Date).__proto__.__proto__ === Object.prototype // true
```

所以如果用 `value instanceof Object` 来判断对象变量是否为 `Object` 构造函数生成的对象是不准确的。
可以通过 `value.__proto__ === Object.prototype` 来判断。  

此外也可以通过  `Object.prototype.toString.call()` 来判断对象类型

```js
    Object.prototype.toString.call(new Object()) // [object Object]
    Object.prototype.toString.call(new Array()) // [object Array]
    Object.prototype.toString.call(new Date()) // [object Date]
    ···
```


