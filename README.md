### How to install

```
npm i -D snowpack-plugin-hjson
```

```diff
  module.exports = {
    plugins: [
+     'snowpack-plugin-hjson'
    ]
  }
```

### How to use

```diff
+ import config from './config.hjson'
// or
+ import config from './config.json'
```

### Hjson syntax

https://hjson.github.io/

https://hjson.github.io/try.html
# snowpack-plugin-hjson
