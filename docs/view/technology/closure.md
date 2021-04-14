# 闭包  

__在MDN的文档中，是这样定义闭包的：__  
一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）。  
我的理解是一个函数只要引用了其父级作用域中的变量，那么其父级作用域（外层函数）与该函数就是一个闭包的结构。

```js
    let a = 1;
    function fn(){
        console.log(a);
    }
```

以上可以看做一个闭包，这样一看其实在js中处处是闭包。然而日常开发中一般都是以下面方式使用闭包。

```js
    function dobounce(callback,time=500,immediate=false){
        let timer = null;
        return function(){
            if(immediate){
                if(!timer){
                    callback()
                }else{
                    clearTimeout(timer);
                } 
                timer = setTimeout(()=>{timer=null},time)
            }else{
                if(timer)clearTimeout(timer)
                timer = setTimeout(()=>{
                    callback();
                    timer = null;
                },time)
            }

        }
    }
```

上面是一个防抖函数。其中 `timer` 作为私有变量为内层函数调用而不是声明在全局中，这样可以避免变量被错误修改，且可以确保每次返回的函数都拥有私有的 `timer`。

