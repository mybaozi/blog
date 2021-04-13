# this  

javascript中 `this` 关键字的指向一般取决于函数的调用方式。在非严格模式和严格模式下也会有一些差别，下文主要讨论非严格模式下的情况。  
当通过一般方式调用函数时，`this` 指向其全局对象。  
```js
    function fn(){
        console.log(this)
    }
    fn() // Window
```
当通过对象调用函数时，`this` 指向调用该函数的对象。
```js
    let obj = {
        a:1,
        fn:function(){
            console.log(this.a)
        }
    }
    obj.fn() // 1 
```
通过 `call` `apply` `bind` 修改其 `this` 指向。
```js
    let obj = { a: 1 }
    function fn(){
        console.log(this.a)
    }
    fn()           // undefined
    fn.call(obj)   // 1
    fn.apply(obj)  // 1
    fn.bind(obj)() // 1
```
ES5引入的箭头函数，其 `this` 与其词法上下文相同。
```js
    let obj = {
        a:1,
        fn:()=>{
            console.log(this)
        }
    }
    obj.fn() // Window

```
