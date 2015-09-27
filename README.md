# amdcheck loader for webpack

> Uses AST to find and remove unused dependencies in AMD modules.

## Installation

`npm install amdcheck-loader`

## Usage

``` javascript
var source = require("amdcheck!./source.js");
// => returns optimized source (unused dependencies removed).
```

Don't forget to polyfill `require` if you want to use it in node.
See `webpack` documentation.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
