import React, { useState } from 'react';

const ColorPicker = ({ onColorChange }) => {
    const handleColorChange = (event) => {
        onColorChange(event.target.value);
    };

    return (
        <input type="color" onChange={handleColorChange} />
    );
};

const ParentComponent = () => {
    const [color, setColor] = useState('#000000');

    return (
        <div>
            <h1>Selected Color: {color}</h1>
            <ColorPicker onColorChange={setColor} />
        </div>
    );
};

export default ParentComponent;
