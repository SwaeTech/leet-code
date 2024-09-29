# leet-code

data structure and algorithms practice and notes

# Setup Test Environment

The old versions of JavaScript had no import, include, or require, so many different approaches to this problem have been developed.

But since 2015 (ES6), JavaScript has had the ES6 modules standard to import modules in Node.js, which is also supported by most modern browsers.

https://nodejs.org/api/esm.html
ECMAScript modules are the official standard format to package JavaScript code for reuse. 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

In Node.js, any file that consists of JavaScript code in a file ending with .js is a module.

In the case of a file written in the CommonJS syntax, TypeScript may display the following message:
File is a CommonJS module; it may be converted to an ES module.
This message is neither an error nor a warning, but simply indicates that TypeScript may convert the file written in CommonJS syntax to ES syntax.

If you get this error

```
(node:13802) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
```

Make sure you `npm init` and set the package type to `"type": "module"`

Make sure to use the latest Node version `nvm use --lts`
