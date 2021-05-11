import Room from "../models/room";
import mongoose from "mongoose";
import dbCoonect from "../config/dbConnect";
import rooms from "../data/rooms.json";

// dbCoonect()

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");
    await Room.insertMany(rooms);
    console.log("All Rooms are added");
  } catch (error) {
    console.log("test", error.message);
    process.exit();
  }
};

// seedRooms();
