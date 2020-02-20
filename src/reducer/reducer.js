// reducer
export const reducer = (state, action) => {    

    switch (action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                radios: action.payload,
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case 'RADIOS_STATUS':
            return {
                ...state,
                radios: action.payload.radios,
                radioOn: action.payload.radioOn,
                index: action.payload.index,
            };
        default:
            throw new Error();
    }
};