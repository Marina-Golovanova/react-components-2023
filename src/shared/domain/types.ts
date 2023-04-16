export type ICharacter = {
  id: string;
  name: string;
  height: string;
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  wikiUrl: string;
  hair: string;
};

export type IUser = {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  agreePromotion: boolean;
  agree: boolean;
  photoUrl: string;
};
