import Express from "express";
import { createPlayer, findPlayerByID, findPlayerByEmail, updatePlayer, deletePlayer, changePlayerPortrait, findAll} from "../controllers/playerController.js";

const router = Express.Router()

router.post("/newPlayer", createPlayer)
router.get("/findPlayerByID/:playerID", findPlayerByID)
router.get("/findAll", findAll)
router.get("/findPlayerByEmail/:playerEmail", findPlayerByEmail)
router.put("/update/:playerID", updatePlayer)
router.patch("/changePortrait/:playerID", changePlayerPortrait)
router.delete("/deletePlayer/:playerID", deletePlayer)

export default router