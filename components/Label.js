import React from 'react';

const Label = ({fields, name}) => {
    return (
        <span>{fields[name].value}</span>
    );
}

export default Label;
