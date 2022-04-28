const express = require('express');
const db = require('./db/knex.js');
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

// TEST END POINT
app.get('/test',  async (req, res) => {
    const result = await db('groups').select('*');
    res.send(result);
 })



app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});