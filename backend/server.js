const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');
const addressRoutes = require('./routes/addressRoutes');
const countryRoutes = require('./routes/countryRoutes');
const stateRoutes = require('./routes/stateRoutes');
const collegeRoutes = require('./routes/collegeRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/students', studentRoutes);
app.use('/addresses', addressRoutes);
app.use('/countries', countryRoutes);
app.use('/states', stateRoutes);
app.use('/colleges', collegeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
