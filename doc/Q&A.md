# Q&A

## 隐式具有“any”类型

./tsconfig.json文件 **compilerOptions.noImplicitAny**属性

noImplicitAny: true/false；为 false 时，如果编译器无法根据变量的使用来判断类型时，将用 any 类型代替。为 true 时，进行强类型检查，会报错,很显然，我报的这个错就是这个,将 noImplicitAny: false即可
