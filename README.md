# amdcheck loader for webpack [![Known Vulnerabilities](https://snyk.io/test/github/mehdishojaei/amdcheck-loader/badge.svg)](https://snyk.io/test/github/mehdishojaei/amdcheck-loader)

> Uses AST to find and remove unused dependencies in AMD modules.

## Installation

`npm install amdcheck-loader`

## Usage

source.js
```js
define('module1', ['p1', 'p2'], function (a, b) {
	/**
	 * b is not used in this scope.
	 */
    return (function(b) {
      return b;
    })(a);
});

define('module2', ['p1', 'p2', 'p3', 'p4'], function (a, b, c) {
	return b;
});
```

example.js

``` javascript
var output = require("amdcheck!./source.js");
// => returns optimized source (unused dependencies removed).

console.log(output);
```

output
```
define('module1', ['p1'], function (a) {
	/**
	 * b is not used in this scope.
	 */
    return (function(b) {
      return b;
    })(a);
});

define('module2', ['p2'], function (b) {
	return b;
});
```

Don't forget to polyfill `require` if you want to use it in node.
See `webpack` documentation.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
