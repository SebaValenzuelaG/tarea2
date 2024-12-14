getCreausuario=(req, res)=>{
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
}

module.exports={
    getCreausuario
}