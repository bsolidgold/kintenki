import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("next/font/google", () => ({
  Quantico: () => ({ variable: "font-quantico" }),
}));
