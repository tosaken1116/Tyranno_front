import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { PostCards } from ".";

describe("model/PostCardsのテスト", () => {
  it("title is exist", () => {
    render(<PostCards />);

    const title = screen.getByText(/this is PostCards component/);

    expect(title).toBeInTheDocument();
  });
});