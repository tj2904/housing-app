import { render } from "@testing-library/react";
import  {Section1} from "./Section1";
import { BrowserRouter as Router } from "react-router-dom";

test("renders without crashing", () => {
  render(<Router><Section1 /></Router>);
});
