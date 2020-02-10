import React, { useState, useEffect } from 'react';

// style
import './css/App.scss';

//components
import MainContainer from './components/MainContainer';
import FetchComponent from './components/FetchComponent';

// helpers
import { getData } from './helpers/getData';

const App = () => {

  // hook where the radios are stored
  const [radios, setRadios] = useState();
  const [isErr, setisErr] = useState()

  const fetchData = async () => {
    
    // fetch data
    const res = await getData();

    // unsucced fetch
    if (!res) {
      // catch errors and display UI
      setisErr(true)

    } else if (res.status === 200) {
      // store the data in the hook
      setRadios(res.data.radios);
      console.log("radios stored");
    }
  }

  useEffect(() => {
    if (!radios) {
      console.log("fetching API ...");
      fetchData()
    }
  }, [radios]);

  return (
    <>
      {isErr ? <h1 onClick={() => fetchData()}>Sorry,
        <br />Try it again refreshing the web,
        <br />or clicking here !
        </h1> :
        <FetchComponent radios={radios}  >
          <MainContainer radios={radios} />
        </FetchComponent>
      }
    </>
  );
}

export default App;