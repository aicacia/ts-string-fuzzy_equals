# ts-string-fuzzy_equals

string fuzzy equals

```ts
import { fuzzyEquals } from "@aicacia/string-fuzzy_equals";

fuzzyEquals("cart", "CartWheel") === true;
fuzzyEquals("Cart", "CartWheel", true) === true;
fuzzyEquals("cart", "CartWheel", true) === false;
```
