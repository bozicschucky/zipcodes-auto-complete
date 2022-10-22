import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ZipList, { Props } from "./ZipCodeList";

const props: Props = {
  zipCodeSuggestions: [
    {
      zip_code: 602,
      state: "PR",
      county: "Aguada",
    },
    {
      zip_code: 603,
      state: "PR",
      county: "Aguadilla",
    },
    {
      zip_code: 604,
      state: "PR",
      county: "Aguadilla",
    },
  ],
  handleSelectedZipCode: jest.fn(),
};
describe("ZipList", () => {
  it("should render the list of passed in zip codes suggestions", () => {
    const { container } = render(<ZipList {...props} />);
    expect(container.querySelectorAll(".zip-item").length).toBe(3);
  });

  it("should call handleSelectedZipCode", () => {
    const { container } = render(<ZipList {...props} />);
    fireEvent.click(container.querySelectorAll(".zip-item")[0]);
    expect(props.handleSelectedZipCode).toBeCalled();
  });
});
