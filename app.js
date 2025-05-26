const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Node.js App Deployed via Jenkins KK!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
