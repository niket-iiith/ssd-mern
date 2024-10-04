const express = require('express');
const session = require('express-session');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./controller/controller').router;
const todoRoutes = require('./controller/todo_controller');

dotenv.config();
const app = express();
connectDB();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, 
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', todoRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
