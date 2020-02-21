


@TODO: This is actually not working because:
  - Babel will just transpile this module and require for a 'pure-esm' one.
  - Root project (who will ask for this module) will be able to read current one but NOT the required pure-esm.
  -  @TODO? This goal should be to RE-bundle dependencies with him (and depth 1 ?.


# Wrapper (of ESM Package) for CommonJS support

## Concept

Take a pure ESModule `test-es6-module-npm-package` (defined on folder `1-npm-package`) and will Babel it to provide support for CommonJS (and keep original pure esm).

