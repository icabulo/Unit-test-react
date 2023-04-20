import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("Should render children elements", () => {
  const children = "text";
  render(<Footer> {children} </Footer>);
  const childrenElement = screen.getByText(/text/i);
  //   screen.debug();
  expect(childrenElement).toBeInTheDocument();
});
