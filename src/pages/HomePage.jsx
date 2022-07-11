import React, { useContext } from 'react';
import { useAxios } from '../hooks/useAxios';
import { mainContext } from '../context/Context';
import { setPageAction } from '../actions/actions';
import { types } from '../reducer/types';
import { CharacterCard } from '../components/CharacterCard/CharacterCard';
import { CharactersCardsWrapper } from '../components/UI/CharactersCardsWrapper';
import { filtersCharactersTypes } from '../helpers/dataFilters';
import { FilterCharacters } from '../components/FilterCharacters/FilterCharacters';
import Loader from '../components/UI/Loader/Loader';
import Error from '../components/UI/Error/Error';
import { Search } from '../components/Search/Search';
import heroLogo from './img.png';
import { ButtonStyled } from '../components/UI/button/ButtonStyled';
import { HeroImg } from '../components/UI/HeroImg/HeroImg';

export const HomePage = () => {
  const { loading, error, hasMore } = useAxios();
  const { dispatch, dataOnContext } = useContext(mainContext);
  if (error && !loading)
    return (
      <>
        <HeroImg src={heroLogo} alt='' />
        <Search loading={loading} />
        <Error error={error.code} />
      </>
    );

  return (
    <>
      <HeroImg src={heroLogo} alt='' />
      <Search loading={loading} />
      <CharactersCardsWrapper>
        {dataOnContext?.map(character => (
          <CharacterCard key={character.id} {...character} />
        ))}
        {loading && <Loader error={error.error} />}
      </CharactersCardsWrapper>

      {hasMore && !error && !loading ? (
        <ButtonStyled
          disabled={loading}
          onClick={e => dispatch(setPageAction(types.SET_PAGE_NUMBER))}
        >
          Ver Mas
        </ButtonStyled>
      ) : null}
    </>
  );
};
