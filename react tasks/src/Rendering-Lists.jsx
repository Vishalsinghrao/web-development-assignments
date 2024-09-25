import React from 'react';

const TodoList = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    );
};

const ParentComponent = () => {
    const todos = ['Learn React', 'Build a project', 'Get a job'];

    return (
        <div>
            <h1>Todo List</h1>
            <TodoList todos={todos} />
        </div>
    );
};

export default ParentComponent;
