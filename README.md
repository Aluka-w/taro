# taro-demo
taro小程序 demo

### 配置别名

1. config/index.js

```js
  alias: {
    '@/pages': path.resolve(__dirname, '..', 'src/pages'),
  }
```

2. tsconfig.json

```json
{
  "compilerOptions": {
    "paths": {
      "@/pages/*": ["./src/pages/*"],,
    }
  },
}
```
