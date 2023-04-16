import { ICharacter } from "shared/domain/types";

type IRequestCharactersProps = {
  page: number;
  name: string;
};

export const requestCharacters = async (props: IRequestCharactersProps) => {
  const nameFilter = props.name.length ? `name=${props.name}&` : "";
  const res = await fetch(
    `https://the-one-api.dev/v2/character?${nameFilter}limit=12&page=${props.page}`,
    {
      headers: {
        Authorization: "Bearer hh9YeNA2VtwpjCySLrL1",
      },
    }
  );

  const response: {
    docs: (ICharacter & { _id: string })[];
    pages: number;
  } = await res.json();

  if (res.ok) {
    const characters = response.docs.map<ICharacter>((character) => ({
      id: character._id,
      name: character.name,
      height: character.height,
      race: character.race,
      gender: character.gender,
      birth: character.birth,
      spouse: character.spouse,
      death: character.death,
      realm: character.realm,
      wikiUrl: character.wikiUrl,
      hair: character.hair,
    }));

    return { characters, pages: response.pages };
  }

  throw new Error("Something went wrong");
};
