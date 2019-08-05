const express = require('express')
const serverApp = express()
const cors = require('cors')
const uuid = require('uuid/v4')

let corsOptions = {
    exposedHeaders: ['Accept-Language',
        'Access-Control-Allow-Origin',
       'Connection', 'Content-Length', 'Content-Type', 'Date',
        'Etag', 'Server', 'Via', 'X-Powered-By']
};

serverApp.use(cors(corsOptions))

serverApp.get('/getSameId', (req, res) => {
     res.send({id: "aaa-yyu-998-88888"})
})

serverApp.get('/getUniqueId', (req, res) => {
    res.send({id: uuid()})
})

const port = 3004

serverApp.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
