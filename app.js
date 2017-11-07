const express = require( 'express' );
const app = express(); // creates an instance of an express application

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server listening ${PORT}`)
});

app.get('/', (req, res) => res.send('Hello World!'))