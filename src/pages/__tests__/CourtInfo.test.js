import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import CourtInfo from "../CourtInfo";

test("renders page title correctly", () => {
  render(<CourtInfo />);
  const pageHeading = screen.getByText("Court Infomation Questionnaire");
  expect(pageHeading).toBeInTheDocument();
});
