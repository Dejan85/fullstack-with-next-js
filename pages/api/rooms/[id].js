import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import onError from "../../../middlewares/erros";

import { getSingleRoom } from "../../../controllers/roomController";

const handler = nc({ onError });

// dbConnect();

handler.get(getSingleRoom);

export default handler;
