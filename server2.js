require('dotenv').config()
const express = require('express')
const app = express();
const cors = require('cors');
const testAPI=require('./routes/testApi')

app.use(cors());
app.use(express.json())
app.use((req, res, next) => {
    next()
})

app.use('/normalApi',testAPI );
 const server=app.listen(process.env.PORT,()=>{
    console.log("conected  to port .....>", process.env.PORT);

 })