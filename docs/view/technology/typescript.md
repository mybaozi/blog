# typescript



__类型注解__
不同基础类型的类型注解示例：

```js
  let bool: boolean = false;
  let num: number = 1;
  let str: string = "string";
  let arr: number[] = [1,2,3];
  let arr: Array<number> = [1,2,3];// 数组泛式
  let arr: [string, number] = ['string', 1];// 元组
  //枚举
  /** 
    数字枚举 
  */
  enum Student{
    A,
    B
  }
  let a: Student = Student.A; // 0
  let b: Student = Student.B; // 1
  
  let a: Student = Student[0]; // "A"
  let b: Student = Student[1]; // "B"

  enum Student{
    A = 1,
    B
  }

  let a: Student = Student.A; // 1
  let b: Student = Student.B; // 2

  let a: Student = Student[1]; // "A"
  let b: Student = Student[2]; // "B"

  /**
    字符串枚举
  */
  enum Student{
    A = 'a',
    B = 'b'
  }

  /**
    函数类型
  */
  let fn: (x:number,y:number) => number = function(x:number,y:number):number{
    return x + y;
  }

  let fn = function(x:number = 1,y?:number):number{
    if(!y) {
      return x + y;
    }else{
      return x;
    }
  }
```


__接口__
```js
  interface Person{
    firstName: string;
    lastName: string;
  }

  function greeter(person: Person){
    return "Hello, " + person.firstName + " " + person.lastName;
  }

  let user = { firstName: "Jane", lastName: "User" };

  greeter(user);
```

__泛型__
```js
  //定义泛型函数
  function fn<T>(arg:T):T{
    return arg;
  }

  //调用泛型函数
  let result = fn<string>('string')

  //也可以省略<string>
  let result = fn('string')
  
```