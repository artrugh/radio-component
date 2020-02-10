import axios from 'axios';

export const getData = async () => {

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