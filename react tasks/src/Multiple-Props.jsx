import React from 'react';

const ProfileCard = ({ name, age, location }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
        </div>
    );
};

export default ProfileCard;
