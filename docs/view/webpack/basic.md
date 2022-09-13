# Webpack  
静态模块打包工具。

__核心概念__  
- 入口（entry)
- 输出（output)
- laoder
- 插件（plugin）
- 模式（mode）

```js
  const path = require('path');

  module.exports = {
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'), // __dirname 文件当前所在位置的路径
      filename: 'dist.js'
    }
  }
```

__加载CSS__

需要通过npm先安装相关loader

```js
  npm install --save-dev style-loader css-loader
```
```js
  module.export = {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-laoder', 'css-loader']
        }
      ]
    }
  }
```

__加载Images__

使用内置的asset module

```js
  module.export = {
    rule: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  }
```

__设置HtmlWebpackPlugin__

添加该配置能够自动生成html文件

```js
  npm install --save-dev html-webpack-plugin
```

```js
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = { 
    plugins: [
      new HtmlWebpackPlugin({
        title: '管理输出',
      }),
    ],
  };
```

## 开发环境常用配置

__Devtool__

配置为 `inline-source-map` 可在调试时展示报错信息所在文件。
```js
  module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
  }
```

__webpack-dev-server__

提供一个本地的 `web server`，具有热更新的功能，使用该功能时 `mode` 需为 `development`。
`https://webpack.docschina.org/configuration/dev-server/` 相关配置地址。
```js
  npm install --save-dev webpack-dev-server
```

```js
  module.exports = {
    devServer: {
      static: './dist',
      optimization: {
        runtimeChunk: 'single'
      }
    }
  }
```