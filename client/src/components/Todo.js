import React, { useState } from 'react';
import axios from 'axios';
import './Todo.css';

const Todo = ({ refreshTodos }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert(`Title: ${title}\nDescription: ${description}\nDue Date: ${dueDate}`);

        try {
            const response = await axios.post(
                'http://localhost:5000/api/todos', 
                { title, description, dueDate },
                { withCredentials: true } 
            );

            console.log('Response:', response.data);
            
            alert(`To-Do Added: ${response.data.message || 'Success!'}`);

            refreshTodos();
            setTitle('');
            setDescription('');
            setDueDate('');
        } catch (error) {
            console.error("Error:", error.response ? error.response : error);
            const message = error.response 
                ? error.response.data?.message || 'An error occurred'
                : 'Network error or server is down';
            alert(message);
        }
    };

    return (
        <div className="form-container">
            <h2>Add To-Do</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="datetime-local"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                />
                <button type="submit">Add To-Do</button>
            </form>
        </div>
    );
};

export default Todo;
