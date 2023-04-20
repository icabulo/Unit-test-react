import { screen, render } from "@testing-library/react";
import RAMDetail from "./RAMDetail";

describe("<RAMDetail/> test", () => {
  const props = {
    id: "1",
    species: "species",
    name: "name",
    status: "status",
    image: "http://fake.image.png",
    gender: "gender",
  };

  it("Should render all tags with props", () => {
    //arrange
    render(<RAMDetail {...props} />);

    //act
    const idElement = screen.getByText("1");
    const speciesElement = screen.getByText("species");
    const nameElement = screen.getByText("name");
    const statusElement = screen.getByText("status");
    const imageElement = screen.getByAltText("name");
    const genderElement = screen.getByText("gender");

    // screen.debug();

    //assert
    expect(idElement).toBeInTheDocument();
    expect(speciesElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(statusElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(genderElement).toBeInTheDocument();
  });
});
