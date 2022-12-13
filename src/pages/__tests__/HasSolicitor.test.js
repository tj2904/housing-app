import { render, screen } from "@testing-library/react";
import HasSolicitor from "../HasSolicitor";

test("renders page title correctly", () => {
  render(<HasSolicitor />);
  const pageHeading = screen.getByText("I Have Found A Solicitor");
  expect(pageHeading).toBeInTheDocument();
});
