import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: var(--primary-color);
  font-size: 1.1rem;
  margin-bottom: 1rem;

  &:hover {
    background-color: #b0e1ff;
    color: #000;
    border: 2px solid transparent;
  }
`;
