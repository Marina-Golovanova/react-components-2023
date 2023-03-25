export interface IAuthor {
  firstName: string;
  lastName: string;
  imageUrl: string;
}

export interface IArticleCard {
  id: string;
  title: string;
  imgUrl: string;
  tag: string;
  createdDate: string;
  preview: string;
  author: IAuthor;
  articleUrl: string;
}

export type IFormItem = {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  agreePromotion: boolean;
  agree: boolean;
  photoUrl: string;
};
