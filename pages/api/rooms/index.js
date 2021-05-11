import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import onError from "../../../middlewares/erros";

import {
  getAllRooms,
  newRom,
  updateRoom,
  deleteRoom,
} from "../../../controllers/roomController";

const handler = nc({ onError });

// dbConnect();

handler.get(getAllRooms);
handler.post(newRom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
