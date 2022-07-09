import React from 'react';
import {
  CharacterCardImage,
  CharacterCardStyled,
  CharacterInfo,
  CharacterInfoWrapper,
  CharacterStatus,
} from './CharacterCardStyled';

export const CharacterCard = props => {
  const { name, image, id, gender, status, species } = props;

  return (
    <CharacterCardStyled>
      <CharacterStatus status={status !== 'unknown' && status}>
        {status}
      </CharacterStatus>
      <CharacterCardImage src={image} alt='' />
      <p>{name}</p>
      <CharacterInfoWrapper>
        <CharacterInfo>{gender}</CharacterInfo>

        <CharacterInfo>{species}</CharacterInfo>
      </CharacterInfoWrapper>
    </CharacterCardStyled>
  );
};
