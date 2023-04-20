import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("Should render children elements", () => {
  const children = <h1>text</h1>;
  render(<Header> {children} </Header>);
  const childrenElement = screen.getByText(/text/i);
  //   screen.debug();
  expect(childrenElement).toBeInTheDocument();
});
