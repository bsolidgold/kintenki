import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import RootLayout from "./layout";

vi.mock("@vercel/analytics/next", () => ({
  Analytics: () => <span data-vercel-analytics="enabled" />,
}));

describe("root layout", () => {
  it("includes Vercel Analytics once", () => {
    const markup = renderToStaticMarkup(
      <RootLayout>
        <main />
      </RootLayout>,
    );

    expect(markup.match(/data-vercel-analytics="enabled"/g)).toHaveLength(1);
  });
});
