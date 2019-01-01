import * as tape from "tape";
import { fuzzyEquals } from "../lib";

tape(
  "fuzzyEquals(query, text[, caseSensitive = false])",
  (assert: tape.Test) => {
    assert.equal(fuzzyEquals("twl", "CartWheel"), true);
    assert.equal(fuzzyEquals("cart", "CartWheel"), true);
    assert.equal(fuzzyEquals("Cart", "CartWheel"), true);
    assert.equal(fuzzyEquals("cw", "CartWheel"), true);
    assert.equal(fuzzyEquals("ee", "CartWheel"), true);
    assert.equal(fuzzyEquals("art", "CartWheel"), true);
    assert.equal(fuzzyEquals("eeel", "CartWheel"), false);
    assert.equal(fuzzyEquals("dog", "CartWheel"), false);
    assert.end();
  }
);

tape("fuzzyEquals(query, text, caseSensitive = true)", (assert: tape.Test) => {
  assert.equal(fuzzyEquals("twl", "CartWheel", true), false);
  assert.equal(fuzzyEquals("cart", "CartWheel", true), false);
  assert.equal(fuzzyEquals("Cart", "CartWheel", true), true);
  assert.equal(fuzzyEquals("cw", "CartWheel", true), false);
  assert.equal(fuzzyEquals("ee", "CartWheel", true), true);
  assert.equal(fuzzyEquals("art", "CartWheel", true), true);
  assert.equal(fuzzyEquals("eeel", "CartWheel", true), false);
  assert.equal(fuzzyEquals("dog", "CartWheel", true), false);
  assert.end();
});
