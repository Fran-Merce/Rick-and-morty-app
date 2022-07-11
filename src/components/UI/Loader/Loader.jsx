import React from 'react';
import loaderImg from '../../../assets/spinner.gif';
import { LoaderWrapper } from './LoaderStyled';
function Loader({ error = false }) {
  return (
    <LoaderWrapper error={error && error}>
      <img src={loaderImg} alt='' />
    </LoaderWrapper>
  );
}

export default Loader;
