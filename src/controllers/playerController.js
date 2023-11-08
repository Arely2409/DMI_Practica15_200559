
const createPlayer = (req, res) =>
{
    console.log("Se ha solicitado la creacion de un nuevo jugador");
    res.status(200);
    res.send("Se ha solicitado la creacion de un nuevo jugador");
}


const findPlayerByID = (req, res) =>
{
    const playerID = req.params.playerID
    console.log(`Se ha solicitado buscar al jugador con id: ${playerID}`);
    res.status(200);
    res.send(`Se ha solicitado buscar al jugador con id: ${playerID}`);
}

const findPlayerByEmail = (req, res) =>
{
    const playerEmail = req.params.playerEmail
    console.log(`Se ha solicitado buscar al jugador con email: ${playerEmail}`);
    res.status(200);
    res.send(`Se ha solicitado buscar al jugador con email: ${playerEmail}`);
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

export {createPlayer, findPlayerByID, findPlayerByEmail, updatePlayer, changePlayerPortrait, deletePlayer}