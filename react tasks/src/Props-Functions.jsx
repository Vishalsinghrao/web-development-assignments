import React from 'react';

const ToggleSwitch = ({ toggleState }) => {
    return (
        <button onClick={toggleState}>
            Toggle
        </button>
    );
};

const ParentComponent = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(prevState => !prevState);
    };

    return (
        <div>
            <h1>Switch is {isOn ? 'ON' : 'OFF'}</h1>
            <ToggleSwitch toggleState={handleToggle} />
        </div>
    );
};

export default ParentComponent;
