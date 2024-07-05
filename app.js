const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT|| 3000;
const rate_limit = require('express-rate-limit')

const limiter = rate_limit({
    WindowMs:15*60*1000,
    max:50
});
app.use(limiter)

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});


app.listen(PORT,()=>{
    console.log(`Server Running on localhost:${PORT}`)
})