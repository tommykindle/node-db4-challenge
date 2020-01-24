const server = require('./server.js');

const port = process.env.PORT || 5454;

server.listen(port, () => {
    console.log(`\nRunning on port ${port}\n`)
})