import React, { useState, useEffect } from 'react';

// dependencies
import axios from 'axios';
import uuid from 'uuid';

const Home = () => {

    // hook where the radios are stored
    const [radios, setRadios] = useState();

    // load controll
    const [loadContr, setLoadContr] = useState({
        isLoading: false,
        isError: false,
        displayUI: false
    });

    // alarm message
    const [alarm, setAlarm] = useState('');

    const getRadios = async () => {

        try {
            const res = await axios({
                method: 'get',
                url: 'https://teclead.de/recruiting/radios',
                timeout: 4000,    // 4 seconds timeout
            });
            return res

        } catch (err) {
            console.log(err);
            return err.response
        }
    };

    const fetchData = async () => {

        //fetch data
        const res = await getRadios();
        // succed fetch
        if (res.status === 200) {
            // store the data in the hook
            setRadios(res.data.radios);
            setAlarm("")
            // loader controllers
            await setLoadContr({
                ...loadContr,
                isLoading: false,
                isError: false,
                showUI: true
            });
            console.log("radios stored");
        } else {
            setAlarm('Oops, problems with the internet. Please try again...')
            setLoadContr({
                ...loadContr,
                isLoading: false,
                isError: true,
                showUI: false
            });
        }
    }

    useEffect(() => {

        // this happens after the first render = componentDidUnmont
        if (!radios) {
            console.log("fetching API ...");
            // name the document with name of the user
            document.title = `Radio-App`;
            // now is loading
            setLoadContr({ ...loadContr, isLoading: true });
            // call the function
            fetchData()

        } else {
            console.log(radios);
        }
    }, [radios]);

    return (
        <div className="App">
            <header className="App-header">
                {loadContr.isError && (
                    <>
                        <small>{alarm}</small>
                        <button className="btn refresh"
                            onClick={() => fetchData()}
                        >PRESS HERE</button>
                    </>
                )}
                {loadContr.isLoading && <h2>Loading ...</h2>}
                {loadContr.showUI &&
                    radios.map(radio => <li key={uuid.v4()}>{radio.name}</li>)
                }

            </header>
        </div>
    );
}

export default Home;
