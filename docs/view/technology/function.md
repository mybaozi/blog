# call、apply、bind

`call` 和 `apply` 除了传参的方式不同，用法都一样,修改函数 `this` 指向并执行该函数。  
`bind` 传参方式与call相同，并返回一个修改了 `this` 指向的函数。

```js
    let obj = { 
        arr: []
    }
    function fn(...params){
        this.arr.push(...params)
    }
    fn.call(obj,1,2,3)
    console.log(obj.arr) //  [1,2,3]
    fn.apply(obj,[4,5,6]) 
    console.log(obj.arr) //  [1,2,3,4,5,6]
    let newFn = fn.bind(obj,7,8)
    newFn()
    console.log(obj.arr) //  [1,2,3,4,5,6,7,8]
```

__手写 `call` `apply` `bind`__

```js
    Function.prototype.myCall = function(target,...params){
        let key = Symbol();
        // target[key] = this;
        Object.prototype[key] = this;
        let result = target[key](...params);
        // delete target[key];
        delete Object.prototype[key];
        return result;
    }

    Function.prototype.myApply = function(target,params){
        if(Array.isArray(params)) throw('第二个参数只接受数组类型')
        let key = Symbol();
        // target[key] = this;
        Object.prototype[key] = this;
        let result = target[key](...params);
        // delete target[key];
        delete Object.prototype[key];
        return result;
    }

    Function.prototype.myBind = function(target,...params){
        return ()=>{
            let key = Symbol();
            // target[key] = this;
            Object.prototype[key] = this;
            let result = target[key](...params);
            // delete target[key];
            delete Object.prototype[key];
            return result;
        }
    }
```

直接在对象上赋值方法时如果该方法有打印 `this` 的值会发现对象里多了个symbol类型字段，故做了修改。  