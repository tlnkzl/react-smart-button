import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SmartButton from "./SmartButton";

const testData = {
  id: 1,
  icon: "cloud",
  label: "Paris",
  color: "#FFFFFF",
  background: "#423654",
  enabled: true,
  action: "",
};

describe("SmartButton", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<SmartButton data={testData} />);
    expect(baseElement).toBeTruthy();
    screen.debug();
  });
});
  test('has correct city name', () => {
    const {getByText} = render(<SmartButton data={testData} />);
    expect(getByText(testData.label)).not.toBeNull();
  });

