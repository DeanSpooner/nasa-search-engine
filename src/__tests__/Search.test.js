import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    setSearchResults: () => {},
  };

  const { asFragment } = render(<Search />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders input correctly", () => {
    const { getByTestId } = render(
      <Search setSearchResults={validProps.setSearchResults} />
    );
    const input = getByTestId("search__input");
    expect(input).toBeTruthy();
  });

  it("renders button correctly", () => {
    const { getByTestId } = render(
      <Search setSearchResults={validProps.setSearchResults} />
    );
    const button = getByTestId("search__button");
    expect(button).toBeTruthy();
  });
});
