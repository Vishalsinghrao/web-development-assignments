import React, { useState } from 'react';

const TextInput = ({ onTextChange }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        onTextChange(event.target.value); 
    };

    return <input type="text" value={value} onChange={handleChange} />;
};

const ParentComponent = () => {
    const [text, setText] = useState('');

    return (
        <div>
            <h1>Input Text: {text}</h1>
            <TextInput onTextChange={setText} />
        </div>
    );
};

export default ParentComponent;
