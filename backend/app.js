const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 80;
const { posts } = require('./data.js')


app.use(cors());
app.get('/api/post', (req, res) => {
    res.json(posts)
})

app.listen(PORT, () => console.log(`server running on ${PORT}`));