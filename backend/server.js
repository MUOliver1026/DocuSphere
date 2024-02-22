require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const userRoutes = require('./routes/user.routes');
const documentRoutes = require('./routes/documents.routes'); // 使用实际的路径替换此处

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use('/api/users', userRoutes);
app.use('/api/documents', documentRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Could not connect to MongoDB:', err);
});

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});