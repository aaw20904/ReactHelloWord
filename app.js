const express = require('express');
const app = express();

app.use(express.static("public"));

app.listen(80, () => {
    console.log('React app listening on port 80!');
});

//Run app, then load http://localhost:port in a browser to see the output.