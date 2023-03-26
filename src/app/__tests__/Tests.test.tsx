import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { App } from "../App";
import { ArticleCard } from "../../shared/ui/article-card/ArticleCard";
import { Header } from "../../shared/ui/header/Header";

test("Article card"),
  () => {
    const card = {
      id: "1",
      title: "Kettle",
      imgUrl: "",
      tag: "Media",
      createdDate: "14.04.2022",
      preview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates sapiente minima, mollitia quo reiciendis labore tempora in dolorum ut est cum, eum incidunt, rem eligendi nisi reprehenderit unde error!",
      author: {
        firstName: "Maria",
        lastName: "A",
        imageUrl: "",
      },
      articleUrl: "",
    };
    render(<ArticleCard {...card} />);
    const element = screen.getByText("title");
    expect(element).toBeInTheDocument();
  };

test("Header", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Header />
    </MemoryRouter>
  );
  const linkElement = getByText(/About us/);
  expect(linkElement).toBeInTheDocument();
});
