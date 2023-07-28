import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { deepStrictEqual, strictEqual } from "node:assert";
import normalizeNewline from "normalize-newline";
import render from "../../../src/report/csv.mjs";
import deps from "./__mocks__/cjs-no-dependency-valid.mjs";

const elementFixture = normalizeNewline(
  readFileSync(
    fileURLToPath(
      new URL("__mocks__/cjs-no-dependency-valid.csv", import.meta.url),
    ),
    "utf8",
  ),
);

describe("[I] report/csv reporter", () => {
  it("renders csv", () => {
    const lReturnValue = render(deps);

    deepStrictEqual(normalizeNewline(lReturnValue.output), elementFixture);
    strictEqual(lReturnValue.exitCode, 0);
  });
});
