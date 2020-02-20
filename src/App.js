import React, { useEffect } from 'react';

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
        < h1 > LOADING ...</h1> :
        <MainContainer
          radios={radios} />}
    </>
  );
}

export default App;