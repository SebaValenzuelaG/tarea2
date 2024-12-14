const express = require('express');
const cors = require('cors');
const jwt = require("jsonwebtoken");
const app = express();
// const userRoutes = require('./router/pokemon.router')
const userRoutes = require('./router/auth.router')


app.use(cors())
app.use(express.json());


app.use('/api/user', userRoutes)

// app.get('/status', (res, req)=>{
//     res.send('hola mundo')
// })
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server up port ${PORT}`);
});