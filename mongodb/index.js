const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8280;

mongoose.connect('mongodb://0.0.0.0:27017/performance', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema
const schema = new mongoose.Schema({
  sequence: Number,
  constext: String,
});

// Define a model
const Test = mongoose.model('Test', schema);

app.get('/test', async (req, res) => {
  try {
    const test = await Test.find();
    res.json(test);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});