# Promise 

Promise 是异步编程的一种解决方案，比传统的异步解决方案回调函数和事件更合理、更强大。

__promise的基本用法__  

通过 `Promise` 创建一个 `promise` 对象时并不是异步操作，所以一般要封装在一个函数中，待使用时通过该函数返回创建并返回一个 `promise` 对象。
```js
  let promise = function (){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let result = { status: Math.random() > 0.5 ? true : false , data: '数据'}
        console.log(result)
        if(result.status){
          resolve(result.data)
        }else{
          reject(result.data)
        }
      },2000)

    })
  }
  promise().then(
    (res)=>{
      //成功回调
      console.log('成功',res)
    },
    (error)=>{
      //失败回调
      throw Error('失败',error)
    }
  )
```