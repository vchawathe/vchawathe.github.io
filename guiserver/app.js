const express = require('express')
const process = require('process')
const path = require('path');
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello World!'+process.cwd()))
app.use('/static', express.static(path.join(__dirname, 'public')))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))