# Generator & Iterator

```js
  function* generator(){
    yield 1;
    yield 2;
    yield 3;
  }
  let gen = generator()
  gen.next() // {value:1,done:false}
  gen.next() // {value:2,done:false}
  gen.next() // {value:3,done:false}
  gen.next() // {value:undefined,done:true}
```

```js
  let arr = [1,2,3];
  let iter = arr[Symbol.iterator]()
  iter.next() // {value:1,done:false}
  iter.next() // {value:2,done:false}
  iter.next() // {value:3,done:false}
  iter.next() // {value:undefined,done:true}
```