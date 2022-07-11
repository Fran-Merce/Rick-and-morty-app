import React from 'react';
import { ErrorMainWrapper } from './ErrorStyled';

const errorMessage = {
  notCharacNotFound: 'Personaje no encontrado',
  defaultError: 'Ocurrio un error intetalo de nuevo',
};

const Error = ({ error = errorMessage.defaultError }) => {
  const { notCharacNotFound, defaultError } = errorMessage;
  return (
    <ErrorMainWrapper>
      {error === 'ERR_BAD_REQUEST' ? (
        <div>
          <h1>{notCharacNotFound}</h1>
        </div>
      ) : (
        <h1>{defaultError}</h1>
      )}
      <img
        src='https://img.wattpad.com/483c1cf384beb0415f99abfcaf2a8d1e89eeab24/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f3662714a33712d49516b687277513d3d2d3438323239363834322e313465653431353035333363313633343237363636313631363534342e676966'
        alt=''
      />
    </ErrorMainWrapper>
  );
};

export default Error;
