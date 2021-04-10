/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
import React from 'react';
import chroma from 'chroma-js';
import { Redirect } from 'react-router-dom';

import Select from 'react-select';

const colourOptions = [
    { value: 'characters', label: 'Characters', color: '#00B8D9' },
    { value: 'comics', label: 'Comics', color: '#0052CC' },
];

const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',
    width: 100,
    fontWeight: 'bold',
    color: '#f2f2f2',
    ':before': {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10,
    },
});

const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'black' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? null
                : isSelected
                ? data.color
                : isFocused
                ? color.alpha(0.1).css()
                : null,
            color: isDisabled
                ? '#ccc'
                : isSelected
                ? chroma.contrast(color, 'white') > 2
                    ? 'white'
                    : 'black'
                : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor:
                    !isDisabled &&
                    (isSelected ? data.color : color.alpha(0.3).css()),
            },
        };
    },
    input: (styles) => ({ ...styles, ...dot() }),
    placeholder: (styles) => ({ ...styles, ...dot('#f2f2f2') }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};
// eslint-disable-next-line no-unused-vars
function change(event) {
    return <Redirect to="/comics" />;
}
export default () => (
    <Select
        label="Single select"
        styles={colourStyles}
        options={colourOptions}
        defaultValue={colourOptions[0]}
    />
);
