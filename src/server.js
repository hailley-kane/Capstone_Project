const express = require('express');

const app = express();

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})


app.listen(3000, () => {console.log("Express started one port 5000")})