import React, {
    useEffect,
    useReducer,
    useState,
    useCallback
} from 'react';

import axios from 'axios';

import { reducer } from '../reducer/reducer'

const initialState = {
    radioOn: "nothing",
    index: undefined,
    isLoading: false,
    isError: false,
    radios: []
};

export const useDataApi = url => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        let didCancel = false;
        const fetchData = async () => {
            dispatch({ type: 'FETCH_INIT' });
            try {
                const result = await axios(url);

                if (!didCancel) {
                    dispatch({ type: 'FETCH_SUCCESS', payload: result.data.radios });
                }

            } catch (error) {
                if (!didCancel) {
                    dispatch({ type: 'FETCH_FAILURE' });
                }
            }
        };

        fetchData();

        return () => {
            didCancel = true;
        };

    }, [url]);

    return [state];
};


export const useRadiosStatus = (initialIndex, initialData) => {

    // CALL THE REDUCER PASSING INITIAL STATE
    const [state, dispatch] = useReducer(reducer, initialData);

    // INDEX HOOK WHICH IS OUR DEPENDENCI
    const [index, setIndex] = useState(initialIndex); 

    useEffect(() => {
     mapping()
    }, [index])

    const mapping = useCallback(
        () => {
            let radioOn;
            const newData = state.radios.map(
                (radio, ind) => {
                    if (index === ind) {
                        radioOn = radio.name;
                        return { ...radio, status: true }
                    }
                    else {
                        return { ...radio, status: false }
                    }
                }
            );

            // DISPATCH PASSING THE PAYLOAD
            dispatch({
                type: 'RADIOS_STATUS', payload: {
                    radios: newData,
                    radioOn: radioOn,
                    index: index
                }
            });
        }, [index, state.radios]
    )

    // RETURN THE STATE AND THE HOOK WHICH SETS THE INDEX
    return [state, setIndex];
}