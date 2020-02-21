# ESM Package (with Hybrid CommonJS support)

## Concept for publishing an NPM ESM package (with CommonJS backward):

 - Create an ESModule package (in `./src`) `{type:"module"}`
 - On publish use Babel to transpile (in `./lib`)
     -> Also add `{"type":"commonjs"}` on `./lib/package.json` file.
 - use `./node_modules/.bin` on script to avoid using global on another environment.
 - Store only `./src` on dit (`./lib` and `./node_modules` are useless)
 - Before Publishing, transpile the package (Root-Project's Babel who'll use commonjs version of this package will not bundle dependencies)

## Links

  - Add link about Doc/Design/ESM
  - [Hybrid ESM/CommonJS Packages](https://2ality.com/2019/10/hybrid-npm-packages.html)
  - [StackOverflow - How to publish a module written in ES6 to NPM?](https://stackoverflow.com/questions/29738381/how-to-publish-a-module-written-in-es6-to-npm)

## Note

  - script `transpile:js` is probably useless (but in case we need to provide a minimify version ?)