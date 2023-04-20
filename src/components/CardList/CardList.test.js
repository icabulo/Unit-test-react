import { render, screen } from "@testing-library/react";
import CardList from "./CardList";
import { BrowserRouter } from "react-router-dom";

test("Should render correct number of cards", () => {
  //   BrowerRouter used to be able to handle useNavigate hook inside Cardlist component
  const list = [1, 2, 3, 4];
  const MockCardList = () => {
    return (
      <BrowserRouter>
        <CardList list={list} />
      </BrowserRouter>
    );
  };
  render(<MockCardList />);
  //   screen.debug();
  const elements = screen.getAllByTestId("card");
  //   screen.debug(elements);

  expect(elements.length).toBe(list.length);
});
