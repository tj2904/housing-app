import { render, screen } from "@testing-library/react";
import Details from "../Details";
import { BrowserRouter as Router } from "react-router-dom";

test("renders page title correctly", () => {
  render(
    <Router>
      <Details />
    </Router>
  );
  const pageHeading = screen.getByText("Law Firm Details Page");
  expect(pageHeading).toBeInTheDocument();
});
