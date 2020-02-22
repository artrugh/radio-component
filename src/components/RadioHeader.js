import React from 'react';

import uuid from 'uuid';

const RadioHeader = ({index, radioOnIndex, radio, setRadio})=> {

    return (
        <div className="radio-details"
            key={uuid.v4()}
            onClick={(() =>
                radioOnIndex !== index ?
                    setRadio(index) :
                    setRadio()
            )}>
            <h2
                className="radio-link"
                key={uuid.v4()}
                style={{
                    color: radio.status ?
                        "#edae61" : "#e1e5eb"
                }}  >
                {radio.name}
            </h2>
            <p key={uuid.v4()}
                style={{
                    color: radio.status ?
                        "#edae61" : "#e1e5eb"
                }} >
                {radio.frequency}
            </p>
        </div>
    );
}
export default RadioHeader;

