import Room from "../models/room";
import ErrorHandler from "../utils/errorHandler";

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

const getSingleRoom = async (req, res, next) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
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
    return next(new ErrorHandler("Room not found with this ID", 404));
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
    return next(new ErrorHandler("Room not found with this ID", 404));
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
