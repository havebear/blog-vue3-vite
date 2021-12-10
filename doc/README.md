<!--
 * @Author: BGG
 * @Date: 2021-12-10 16:46:18
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-10 17:10:42
 * @Description:  
-->
# 开发日志

## 配置TypeScript

增加./tsconfig.json文件

``` json
{
  "compilerOptions": {
    // 与 Vue **的浏览器支持保持一致**
    "target": "es5",
    // 这可以对 `this` 上的数据 property 进行更严格的推断
    "strict": true,
    // 如果使用 webpack 2+ 或 rollup，可以利用 tree-shake:
    "module": "es2015",
    "moduleResolution": "node"
  }
}
```

## 配置环境变量

``` js
// 默认环境变量
console.log(process.env)
// {NODE_ENV: 'development', BASE_URL: '/'}
// 可以用NODE_ENV区分开发环境和生产环境
// development 开发环境
// production  生产环境
```
