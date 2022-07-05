import { useContext } from 'react';
import { setFilterAction } from './actions/actions';
import { mainContext } from './context/Context';
import { useAxios } from './hooks/useAxios';
import { types } from './reducer/types';

function App() {
  const { state, dispatch } = useContext(mainContext);
  useAxios(state.apiQuerys);

  return (
    <>
      <h1 className='text-red-500 text-center '>hola</h1>
      <button
        className='w-4 bg-slate-700'
        onClick={() => dispatch(setFilterAction('female', types.SET_GENDER))}
      >
        hola
      </button>
    </>
  );
}

export default App;
