import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import onError from "../../../middlewares/erros";

import {
  allRooms,
  newRom,
  updateRoom,
  deleteRoom,
} from "../../../controllers/roomController";

const handler = nc({ onError });

// dbConnect();

handler.get(allRooms);
handler.post(newRom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
