import React, { useState } from 'react';

const LikeButton = ({ likeCount }) => {
    const [count, setCount] = useState(likeCount);

    return (
        <div>
            <h1>Likes: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Like</button>
        </div>
    );
};

export default LikeButton;
