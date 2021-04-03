const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(router);


app.listen(PORT, (err, res) => {
    console.info(`Server Start PORT : ${PORT}`);
})
