import Room from "../models/room";

const getAllRooms = async (req, res) => {
  const rooms = await Room.find();

  try {
    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      error: error.message,
    });
  }
};

const newRom = async (req, res) => {
  const room = await Room.create(req.body);

  try {
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    error.status(200).json({
      success: false,
      error: error.message,
    });
  }
};

export { getAllRooms, newRom };
