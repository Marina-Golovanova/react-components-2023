import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Header } from "../../shared/ui/header/Header";

test("Header", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Header />
    </MemoryRouter>
  );
  const linkElement = getByText(/About us/);
  expect(linkElement).toBeInTheDocument();
});
