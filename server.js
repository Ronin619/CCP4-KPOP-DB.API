const express = require('express');
const db = require('./db/knex.js');
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

// CRUD OPERATIONS

app.get('/groups',  async (req, res) => {
     const result = await db('groups').select('*')
     res.status(200).send(result);
 });

 app.post('/groups', async (req, res) => {
    const body = req.body
    await db('groups').insert(body)
    const groups = await db('groups').select('*')
    res.status(201).send(groups);
});

app.delete('/:group_name', async (req, res) => {
    const body = req.body.group_name
    await db('groups').where({group_name: body}).del()
    res.status(201).end();
})




app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});