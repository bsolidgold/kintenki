import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { metadata } from "./layout";
import HomePage from "./page";

describe("KinTenki launch page", () => {
  it("shows only the brand and copyright content", () => {
    const { container } = render(<HomePage />);

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "KinTenki" })).toBeInTheDocument();
    expect(screen.getByText("© 2026 KinTenki Studios")).toBeInTheDocument();

    for (const forbiddenCopy of [
      "Independent game studio",
      "Colorado",
      "Utah",
      "We make games",
      "Coming soon",
    ]) {
      expect(screen.queryByText(forbiddenCopy, { exact: false })).not.toBeInTheDocument();
    }

    const picture = container.querySelector("picture");
    const mobileSource = picture?.querySelector("source");
    const defaultImage = picture?.querySelector("img");

    expect(picture).toBeInTheDocument();
    expect(mobileSource).toHaveAttribute("media", "(max-width: 640px)");
    expect(mobileSource).toHaveAttribute("srcset", "/kinTenki_logo-square.png");
    expect(defaultImage).toHaveAttribute("src", "/kinTenki_logo-main.png");
  });

  it("publishes canonical studio metadata", () => {
    expect(metadata.metadataBase).toEqual(new URL("https://kintenkistudios.com"));
    expect(metadata.alternates).toMatchObject({ canonical: "/" });
    expect(metadata.description).toContain("independent game studio");
  });
});
