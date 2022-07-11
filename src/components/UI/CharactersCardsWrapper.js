import styled from 'styled-components';

export const CharactersCardsWrapper = styled.section`
  position: relative;
  width: 65%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
