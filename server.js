const express = require('express');

const PORT = '8000';
const app = express();

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`app listening on port: ${PORT}`));
