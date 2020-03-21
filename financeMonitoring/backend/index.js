require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send("<h1>Hello World!</h1>");
})

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection

connection.once('open', () => {
  console.log("MongoDB database connection successfully established")
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
