const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

// TEST END POINT
app.get("/hello", (req, res) => {
    console.log("I am a console.log")
    res.send("world");
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});