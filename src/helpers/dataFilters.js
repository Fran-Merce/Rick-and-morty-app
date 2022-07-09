import { types } from '../reducer/types';

export const filtersCharactersTypes = [
  {
    name: 'gender',
    type: types.SET_GENDER,
    options: ['female', 'male', 'genderless', 'unknown'],
  },
  {
    name: 'species',
    type: types.SET_SPECIES,
    options: [
      'Human',
      'Alien',
      'Humanoid',
      'Poopybutthole',
      'Mythological',
      'Unknown',
      'Animal',
      'Disease',
      'Robot',
      'Cronenberg',
      'Planet',
    ],
  },
  {
    name: 'status',
    type: types.SET_STATUS,
    options: ['Alive', 'Dead', 'Unknown'],
  },
];
