# ts-string-fuzzy_equals

[![license](https://img.shields.io/badge/license-MIT%2FApache--2.0-blue")](LICENSE-MIT)
[![docs](https://img.shields.io/badge/docs-typescript-blue.svg)](https://aicacia.github.io/ts-string-fuzzy_equals/)
[![npm (scoped)](https://img.shields.io/npm/v/@aicacia/string-fuzzy_equals)](https://www.npmjs.com/package/@aicacia/string-fuzzy_equals)
[![build](https://github.com/aicacia/ts-string-fuzzy_equals/workflows/Test/badge.svg)](https://github.com/aicacia/ts-string-fuzzy_equals/actions?query=workflow%3ATest)

string fuzzy equals

```ts
import { fuzzyEquals } from "@stembord/string-fuzzy_equals";

fuzzyEquals("cart", "CartWheel") === true;
fuzzyEquals("Cart", "CartWheel", true) === true;
fuzzyEquals("cart", "CartWheel", true) === false;
```
