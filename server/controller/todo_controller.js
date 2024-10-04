const express = require('express');
const router = express.Router();
const { checkAuth } = require('./controller');

const todos = []; 

router.post('/todos', checkAuth, (req, res) => {
    const { title, description, dueDate } = req.body;
    if (new Date(dueDate) < new Date()) {
        return res.status(400).json({ message: "Due date must be in the future." });
    }
    const newTodo = { id: todos.length + 1, title, description, dueDate };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

router.get('/todos', checkAuth, (req, res) => {
    res.json(todos);
});

module.exports = router;
