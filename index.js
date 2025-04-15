const express = require('express')
const app = express()
const port = 3001

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.all('/ping', (req, res) => {
    return res.json({
        status: true,
        data: req.body,
        msg: "temporarty server is working"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})