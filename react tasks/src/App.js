import React from 'react';
import Greeting from './components/Greeting';
import ProfileCard from './components/ProfileCard';
import StatusMessage from './components/StatusMessage';
import Counter from './components/Counter';
import LikeButton from './components/LikeButton';
import Timer from './components/Timer';
import ParentColorPicker from './components/ColorPicker';   
import ParentTextInput from './components/TextInput';   
import ParentToggleSwitch from './components/ToggleSwitch'; 
import ParentTodoList from './components/TodoList';     

const App = () => {
    return (
        <div>
            <h1>React Components Example</h1>
            <Greeting name="John Doe" />
            <ProfileCard name="Jane Smith" age={30} location="New York" />
            <StatusMessage status="success" />
            <Counter />
            <LikeButton likeCount={0} />
            <Timer start={0} />
            <ParentColorPicker />
            <ParentTextInput />
            <ParentToggleSwitch />
            <ParentTodoList />
        </div>
    );
};

export default App;
