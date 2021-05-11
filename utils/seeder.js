const Room = requier("../models/room");
const mongoose = requier("mongoose");
const rooms = requier("../data/rooms.json");
const mongoose = requier("mongoose");

mongoose
  .connect(process.env.DB_LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((con) => console.log("Connected to local database"));

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
