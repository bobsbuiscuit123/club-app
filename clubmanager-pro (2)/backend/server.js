
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/ai', require('./routes/ai'));
app.use('/events', require('./routes/events'));
app.use('/tasks', require('./routes/tasks'));
app.use('/posts', require('./routes/posts'));
app.use('/payments', require('./routes/payments'));
app.use('/members', require('./routes/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
