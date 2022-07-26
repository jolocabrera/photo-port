import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("Contact component", () => {
  // baseline test
  it("renders", () => {
    render(<ContactForm />);
  });

  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(
      <ContactForm    />
    );
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("header and button are visible", () => {
    it("inserts text into the button and h1", () => {
      // Arrange
      const { getByTestId } = render(<ContactForm />);
      // Assert
      expect(getByTestId("h1test-contact")).toHaveTextContent("Contact me");
      expect(getByTestId("contact-button")).toHaveTextContent("Submit");
    });
  });
