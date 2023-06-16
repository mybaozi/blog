# JSX

`JSX` 是一个javascript的语法扩展，结构类似XML。

```js
//不使用JSX
class Hello extends React.Component {
    render(){
        return React.createElement(
            'div',
            null,
            `Hello ${this.props.toWhat}`
        )
    }
}

ReactDOM.render(
    React.createElement(Hello,{toWhat: 'World'},null),
    document.getElementById('root')
)
//使用JSX
class Hello extends React.Component {
    render(){
        return <div>Hello {this.props.toWhat}</div>
    }
}
ReactDOM.render(
    <Hello toWhat="World"/>,
    document.getElementById('root')
)
```
JSX在树结构的描述上具有可读性强的优势。

`React` 通过 `Babel` 插件将 `JSX` 转化成 `JS`