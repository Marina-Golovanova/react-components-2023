export interface IAuthor {
  firstName: string;
  lastName: string;
  imageUrl: string;
}

export interface IArticleCard {
  title: string;
  imgUrl: string;
  tag: string;
  createdDate: string;
  preview: string;
  author: IAuthor;
  articleUrl: string;
}