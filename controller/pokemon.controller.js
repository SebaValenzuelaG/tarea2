getListPokemon= (req, res)=>{
    res.status(200).json({
        status:'sucess',
        data: {
            mesagge: "[Muesdtro todo los pokemon]"
        }
    })
}
getListPokemonporId=(req, res)=>{
    try {
        if(!req.params){
            res.status(401).json({
    
                status:'error',
                data: {
                    mesagge: "[debe para id]"
                }
            })
        }else{
            res.status(200).json({
    
                status:'sucess',
                data: {
                    mesagge: "[Muesdtro pokemon por id]"
                }
            })
        }
        
    } catch (error) {
        
    }

}

post.creaPokemon= (req, res) =>{}
put.actualizapokemon= (req, res) =>{}
delate.eliminaPokemon= (req, res) =>{}

module.exports={
    getListPokemon,
    getListPokemonporId
}