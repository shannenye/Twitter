const express = require( 'express' );
const app = express(); // creates an instance of an express application

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server listening ${PORT}`)
});

app.get('/', (req, res) => res.send('Hello World!'))


app.use('/', function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log('Request URL:', req.originalUrl)

    next()
}, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})
