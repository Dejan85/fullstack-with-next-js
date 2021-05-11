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

const getSingleRoom = async (req, res) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return res.status({
      success: false,
      error: "Room not found with this ID",
    });
  }

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

const updateRoom = async (req, res) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
    return res.status(404).json({
      success: false,
      error: "Room not found with this ID",
    });
  }

  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

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

const deleteRoom = async (req, res) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return res.status(404).json({
      success: false,
      error: "Room not found with this ID",
    });
  }

  room.remove();

  try {
    res.status(200).json({
      success: true,
      message: "Room is deleted",
    });
  } catch (error) {
    error.status(200).json({
      success: false,
      error: error.message,
    });
  }
};

export { getAllRooms, newRom, getSingleRoom, updateRoom, deleteRoom };
