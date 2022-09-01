// const PORT = 8000;
// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// require('dotenv').config();

// const app = express();

// app.get('/', (req, res) => {
//   res.json('Heloooo There!');
// });

// app.get('/', (req, res) => {
//   const options = {
//     method: 'GET',
//     url: 'https://api.openweathermap.org/data/2.5/weather?q=denver&units=imperial&appid=530abed1e31b809cb6a7405554f46bd8',
//   };

//   axios
//     .request(options)
//     .then((response) => {
//       res.json(response.data);
//       console.log(response.data, 'HERES DATA');
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });

// app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=denver&units=imperial&appid=530abed1e31b809cb6a7405554f46bd8',
    // headers: {
    //   appid: process.env.APP_API_KEY,
    // },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
      console.error(response.data, 'Here');
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
