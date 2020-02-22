import React, { useEffect } from 'react';
import uuid from 'uuid';

// style
import './css/App.scss';

//components
import MainContainer from './components/MainContainer';

// helpers
import { useDataApi } from './helpers/useHooks';

const App = () => {

  // fetch initial Data
  const [{ radios, isLoading, isError }] = useDataApi(
    'https://teclead.de/recruiting/radios'
  );

  useEffect(() => {
    document.title = 'Radio-App';

  }, [])

  return (
    <>
      {isError && <h1>SORRY,<br />TRY IT AGAIN REFRESHING THE WEB</h1>}
      {isLoading ?
        < h1 key={uuid.v4()}> LOADING ...</h1> :
        <MainContainer
        key={uuid.v4()}
          radios={radios} />}
    </>
  );
}

export default App;