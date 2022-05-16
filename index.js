require("dotenv").config();
const { mongoose } = require("mongoose");
const express = require("express");
const cors = require("cors");
const path = require('path')

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "images")))
app.use(require('./routes'))

async function start() {
  try {
    await mongoose.connect(process.env.SERVER);
    app.listen(process.env.PORT, () =>
      console.log(`Сервер запушен на порте: ${process.env.PORT}`)
    );
  } catch (err) {
    console.log(`Ошибка при запуске сервера: ${err.message}`);
  }
}

start();
