const express = require('express');
const jwt = require("jsonwebtoken");

const app = express();

const JWT_SECRET_KEY ="My_secrete_key";

const users=[
    {
        id:"1",
        externalId:"externelID",
        username:"seba@seba.cl",
        password:"sebastian123",
        role: "Admin"
    }
]
const authValidation = (req, res, next) =>{
    const authHeader = req.headers['authorization'];

    console.log("authHeader", authHeader)

    const token =  authHeader && authHeader.split(' ')[1];

    console.log("token", token)

    if(!token){
        res.status(401).json( { message: "Error, token no existe - o no proporcionado" } )
    }

    try {
        const decode = jwt.verify(token, JWT_SECRET_KEY);
        console.log("decode", decode)
        req.user = decode;
    
        next();
        
    } catch (error) {
        return res.status(403).json({ message: "Error Token Invalido" })
    }

}
app.post('/login',(req, res)=>{
    const{username, password}=req.body;
    if (!username || !password) {
        return res.status(401).json({error:"Bad Credentials"})
    }
    const user = users.find(user => user.username === username && user.password === password)
    if (!user || !password) {
        return res.status(401).json({error:"Bad Credentials"})
    }

    const JsonWebToken = jwt.sign({
        externalId:user.externalId,
        username: user.username,
        role:user.role
    },
    JWT_SECRET_KEY,
    {
        expiresIn:'1h'
    })
    res.status(200).json({JsonWebToken})
    console.log(JsonWebToken)

});

app.get("/profile", authValidation, (req, res) => {

    console.log("req.user", req.user)
    res.json({
        message: "esta ruta es protegida"
    })
})

app.get("/createuser",(req, res)=>{
    const{username,email,role, password}=req.body;
    console.log(username);
    try {

    res.status(200).json({
        status:"sucsess",
        message: "usuario creado con exito",username,email,role,password
    })
    } catch (error) {
        return res.status(401).json({error:"error al crear usuario"})
    }
})