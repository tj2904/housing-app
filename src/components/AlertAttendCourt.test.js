import { render, screen } from "@testing-library/react";
import AlertAttendCourt from "./AlertAttendCourt";

test("renders alert correctly", () => {
  render(
          <AlertAttendCourt />
    
  );
  const pageHeading = screen.getByText(/Please note:/i);
  expect(pageHeading).toBeInTheDocument();
});
