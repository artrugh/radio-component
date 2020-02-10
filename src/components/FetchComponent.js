import React, { useEffect, useState } from 'react';

const FetchComponent = props => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        if (props.radios) {
            setIsLoading(false);
        }

    }, [props.radios]);

    return (
        <>
            {isLoading ? <h1 >Loading ...</h1> : props.children}
        </>
    );
}

export default FetchComponent;
