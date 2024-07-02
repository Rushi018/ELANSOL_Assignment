const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const userRoutes = require('./routes/users');
const authRoutes=require("./routes/auth.js")
app.use('/api/users', userRoutes);
app.use("/api/auth",authRoutes);
mongoose.connect('mongodb://localhost:27017/elansoltest').then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
