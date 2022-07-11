import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 100%;

  display: ${props => (props.display ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  input {
    min-width: 25%;
    min-height: 2.2rem;
    border: none;
    border-radius: 15px;
    padding-left: 1rem;
    border: 1px solid #6eb4df;
    background-color: #070707;
    font-size: 1.1rem;

    color: #b0e1ff;
    &::placeholder {
      color: #6eb4df;
    }
  }
`;
