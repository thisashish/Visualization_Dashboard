///express--backend server
const express = require('express');
///mongoose--to connect mogodb easily
const mongoose = require('mongoose');
///cors--to handle cross origin req -------
const cors = require('cors');

//uses & configs
///dotenv
require('dotenv').config();
///express
const app = express();
app.use(express.json());
const corsOptions = {
  origin: process.env.ORIGIN,
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
///db & server connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGOURI).then(
  app.listen(process.env.PORT, () => {
    console.log(`Server start at Port No:${process.env.PORT}`);
  })
);

// app.get('/', async (req, res) => {

//   Data1.map(
//     async (d) =>
//       await Data.insertMany({
//         end_year: d.end_year,
//         intensity: d.intensity,
//         sector: d.sector,
//         topic: d.topic,
//         insight: d.insight,
//         url: d.url,
//         region: d.region,
//         start_year: d.start_year,
//         impact: d.impact,
//         added: d.added,
//         published: d.published,
//         country: d.country,
//         relevance: d.relevance,
//         pestle: d.pestle,
//         source: d.source,
//         title: d.title,
//         likelihood: d.likelihood,
//       })
//   );
//   console.log(await Data.find());
// });

app.get('/find/data', async (req, res) => {
  res.send(await Data.find());
});
//schemas
///data schema
const DataSchema = new mongoose.Schema({
  end_year: {
    type: String,
  },
  intensity: {
    type: Number,
  },
  sector: {
    type: String,
  },
  topic: {
    type: String,
  },
  insight: {
    type: String,
  },
  url: {
    type: String,
  },
  region: {
    type: String,
  },
  start_year: {
    type: String,
  },
  impact: {
    type: String,
  },
  added: {
    type: String,
  },
  published: {
    type: String,
  },
  country: {
    type: String,
  },
  relevance: {
    type: Number,
  },
  pestle: {
    type: String,
  },
  source: {
    type: String,
  },
  title: {
    type: String,
  },
  likelihood: {
    type: Number,
  },
});
const Data = mongoose.model('Data', DataSchema);
//imports
