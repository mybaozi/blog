# 作用域和作用域链


__作用域__   
作用域决定了代码在运行时变量的可访问性。共有三种类型：  

* <font color=green>全局作用域</font>
* <font color=green>函数作用域</font>
* <font color=green>块级作用域（ES6）</font>

当使用 `let` `const` 声明变量时，会产生块级作用域。  

例如：
```js
    function fn(){
        if(true){
            var a = 1;
        }
        console.log(a)
    }
    
    function fn2(){
        if(true){
            let a = 1;
        }
        console.log(a)
    }

    fn()  // 1
    fn2() // Uncaught ReferenceError: a is not defined
```

`fn2` 中，在 `if` 语句中通过 `let` 声明了变量 `a`，使得 `if` 语句中执行的程序形成了块级作用域，从而使得变量 `a` 只能够在当前作用域内访问。

__作用域链__  
当程序执行时访问到当前作用域未声明的变量时，程序会向上级作用域层层访问是否存在该变量。

```js
    var a = 1
    function fn(){
        var a = 2;
        console.log(a)
    }
    function fn2(){
        console.log(a)
    }
    fn()  // 2
    fn2() //1
```