import styled from 'styled-components';
export const CharacterCardStyled = styled.div`
  position: relative;
  width: 18rem;
  height: 24rem;
  border: 1px solid #6eb4df;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-image: url('https://media.gettyimages.com/videos/stars-on-sky-at-night-video-id9005-24?s=640x640');
  border-radius: 10px;
`;

export const CharacterCardImage = styled.img`
  margin-top: 1rem;
  width: 80%;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
`;

export const CharacterInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const CharacterStatus = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.2rem;
  background-color: ${props =>
    props.status ? (props.status === 'Alive' ? '#00dd55' : '#ff0000') : '#242526'};
  padding: 0.2rem 1rem;
  border-radius: 10px;
  margin: 10px;
`;

export const CharacterInfo = styled.p`
  font-size: 1.2rem;
  padding: 0.3rem;
`;
