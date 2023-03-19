import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";
import { IArticleCard } from "../domain/interfaces";

export const articles: IArticleCard[] = [];

for (let i = 0; i < 100; i++) {
  const article: IArticleCard = {
    id: uuidv4(),
    title: faker.lorem.sentence(),
    imgUrl: faker.image.business(640, 480, true),
    tag: "media",
    createdDate: faker.date.past().toLocaleDateString("en-EN"),
    preview: faker.lorem.paragraph(),
    author: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      imageUrl: faker.image.avatar(),
    },
    articleUrl: faker.lorem.word(),
  };

  articles.push(article);
}
