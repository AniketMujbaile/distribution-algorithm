require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Import routes
const astrologerRoutes = require('./routes/astrologerRoutes');
const userRoutes = require('./routes/userRoutes');
const distributionRoutes = require('./routes/distributionRoutes');

// Use routes
app.use('/api/astrologers', astrologerRoutes);
app.use('/api/users', userRoutes);
app.use('/api', distributionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
