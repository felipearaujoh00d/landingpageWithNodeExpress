'use strict';

const app = require('./app');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(3000, function() {
    console.log('express has been started');
})

app.listen(PORT, HOST);


console.log(`Running on http://${HOST}:${PORT}`);