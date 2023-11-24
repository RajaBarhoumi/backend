const express = require('express');
const cors = require('cors'); 

const app = express();
const PORT = 4000;
app.use(cors());




app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello Raja' });
});

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);