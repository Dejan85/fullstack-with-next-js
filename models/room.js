import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: {
    type: string,
    require: [true, "Please enter room name"],
    trim: true,
    maxLength: [100, "Room name cannot exceed 100 characters"],
  },
  price: {
    type: Number,
    require: [true, "Please enter room price"],
    maxLength: [100, "Room name cannot exceed 4 characters"],
    default: 0.0,
  },
  description: {
    type: String,
    require: [true, "Please enter room description"],
  },
  address: {
    type: String,
    require: [true, "Please enter room address"],
  },
  guestCapacity: {
    type: Number,
    require: [true, "Please enter room guest capacity"],
  },
  numOfBeds: {
    type: Number,
    require: [true, "Please enter number of beds"],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  airConditioned: {
    type: Boolean,
    default: false,
  },
  petsAllow: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  umOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter room category"],
    enum: {
      values: ["King", "Single", "Twins"],
      messages: "Please select correct category for room",
    },
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        requierd: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: Number,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    requierd: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Room || mongoose.model("Room", roomSchema);
