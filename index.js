// app.js
import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/docker-test', (req, res) => {
    console.log("logs for express app");
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});