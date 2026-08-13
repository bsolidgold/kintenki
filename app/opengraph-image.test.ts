import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

describe("social sharing card", () => {
  it("uses the standard large-preview dimensions", async () => {
    const image = await readFile(join(process.cwd(), "app/opengraph-image.png"));

    expect(image.toString("ascii", 1, 4)).toBe("PNG");
    expect(image.readUInt32BE(16)).toBe(1200);
    expect(image.readUInt32BE(20)).toBe(630);
  });
});
