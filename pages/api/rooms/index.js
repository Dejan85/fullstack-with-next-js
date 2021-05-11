import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import { getAllRooms, newRom } from "../../../controllers/roomController";

const handler = nc();

// dbConnect();

handler.get(getAllRooms);
handler.post(newRom);

export default handler;
