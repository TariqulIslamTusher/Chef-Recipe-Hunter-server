const express = require('express')
const app = express()
const port = 4000;
const cors = require('cors')


app.use(cors())


app.get('/', (req, res)=>{
    res.send('Dont worry')
})

const chefInfo = require('./data/chef-info.json')
app.get('/chefInfo', (req, res)=>{
    res.send(chefInfo)
})

app.get('/chefInfo/:id', (req, res)=>{
    const id = req.params.id 
    const SingleInfo = chefInfo.find((chef) => chef.id == id)
    res.send(SingleInfo)
})

app.listen(port, ()=>{
    console.log('this is running on', port);
})