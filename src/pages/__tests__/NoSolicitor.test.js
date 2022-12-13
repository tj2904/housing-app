import { render, screen } from "@testing-library/react";
import NoSolicitor from "../NoSolicitor";

test("renders page title correctly", () => {
  render(<NoSolicitor />);
  const pageHeading = screen.getByText("If You Do Not Have A Solicitor...");
  expect(pageHeading).toBeInTheDocument();
});
