import Player from "../models/Player.js";

const createPlayer = async(req, res) =>
{
    try{
        console.log("Se ha solicitado la creacion de un nuevo jugador");
        const {name, email, nickname, birthdate} = req.body;
        console.log(req.body)

        const newPlayer = await Player.create(req.body)
        
        if(newPlayer){
            res.status(200).json({
                message: `Se ha creado un nuevo jugador con el nombre:  ${name}, Email: ${email}, Alias: ${nickname}, Fecha de nacimiento: ${birthdate}`
            });
        }else{
            res.status(400).json({
                message: `Hubo un error al intentar crear al jugador, porfavor verifica los datos`
            });
        }
    }catch(error){
        console.error("Error al crear un jugador:", error);
        res.status(500).json({
            message: "Hubo un error al intentar crear al jugador."
        });
    }
};

const findAll = async (req,res) => {
    console.log("Se ha solicitado la consulta de todos los jugadores");
    const allPlayers = await Player.findAll();
    console.log(allPlayers);

    if(allPlayers === null){
        res.json({
            messageStatus: `No hay jugadores registrados.`
        });
    }else{
        res.status(200);
        res.json(allPlayers)
    }
}


const findPlayerByID = async(req, res) =>
{
    const playerID = req.params.playerID
    console.log(`Se ha solicitado buscar al jugador con id: ${playerID}`);
    const playerFound =  await Player.findByPk(playerID)

    if(playerFound === null){
        res.status(400);
        res.send(`El jugador con el ID:  ${playerID}, no se encuentra la BD.`);
    }else{
        res.status(200);
        res.json(playerFound)
    }
}

const findPlayerByEmail = async(req, res) =>
{
    const playerEmail = req.params.playerEmail
    console.log(`Se ha solicitado buscar al jugador con email: ${playerEmail}`);

    const playerFoundEmail =  await Player.findOne({where: {email: playerEmail}})

    if(playerFoundEmail === null){
        res.status(400);
        res.json({
            messageStatus: `El jugador con el email: ${playerEmail}, no se encuentra en la BD.`
        });
    }else{
        res.status(200);
        res.json(playerFoundEmail)
    }
}

const updatePlayer = (req, res) =>
{
    const playerID = req.params.playerID
    console.log(`Se ha solicitado la actualizacion de todos los datos del jugador: ${playerID}`);
    res.status(200);
    res.send(`Se ha solicitado la actualizacion de todos los datos del jugador: ${playerID}`);
}

const changePlayerPortrait = (req, res) =>
{
    const playerID = req.params.playerID
    console.log(`Se ha solicitado el cambio de la imagen del perfil del jugador: ${playerID}`);
    res.status(200);
    res.send(`Se ha solicitado el cambio de la imagen del perfil del jugador: ${playerID}`);
}

const deletePlayer = (req, res) =>
{
    const playerID = req.params.playerID
    console.log(`Se ha solicitado la eliminacion de la cuenta del jugador: ${playerID}`);
    res.status(200);
    res.send(`Se ha solicitado la eliminacion de la cuenta del jugador:${playerID}`);
}

export {createPlayer, findPlayerByID, findPlayerByEmail, updatePlayer, changePlayerPortrait, deletePlayer, findAll}