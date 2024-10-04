// src/App.js

import React, { useState } from 'react';
import Auth from './components/Auth';
import Todo from './components/Todo';


const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="App">
            {loggedIn ? (
                <>
                    <h1>Welcome!</h1>
                    <Todo refreshTodos={() => {}} />
                    
                </>
            ) : (
                <Auth setLoggedIn={setLoggedIn} />
            )}
        </div>
    );
};

export default App;
