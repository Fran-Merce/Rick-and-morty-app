import React from 'react';
import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import { CharacterPage } from '../pages/CharacterPage';
import { HomePage } from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
export const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path='/' element={<HomePage />} />
      <Route path='/character/:id' element={<CharacterPage />} />
      <Route path='/*' element={<NotFoundPage />} />
    </ReactDomRoutes>
  );
};
