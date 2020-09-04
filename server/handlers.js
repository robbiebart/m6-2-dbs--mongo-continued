"use strict";

const { MongoClient } = require("mongodb");
// const assert = require("assert");

// const seats = [];
// const row = ["A", "B", "C", "D", "E", "F", "G", "H"];
// for (let r = 0; r < row.length; r++) {
//   for (let s = 1; s < 13; s++) {
//     seats.push({
//       _id: `${row[r]}-${s}`,
//       price: 225,
//       isBooked: false,
//     });
//   }
// }
const { cleanData } = require("../src/utils");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getSeats = async () => {
  const client = await MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("exercise_2");
  console.log("connected!");

  const seats = await db.collection("seats").find().toArray();

  const cleanedData = cleanData(seats);

  // res.status(200).json({ status: 200, seats: cleanedData, bookedSeats });

  // console.log("seats", cleanedData);
  return cleanedData;
};

const updateSeats = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  try {
    const { seatId, fullName, email } = req.body;
    const newValues = { $set: { fullName, email, isBooked: true } };

    const query = { _id: seatId };
    await client.connect();
    const db = client.db("exercise_2");
    const r = await db.collection("seats").updateOne(query, { ...newValues });

    if (r.modifiedCount === 0) {
      res.status(200).json({ message: "Seat Unavailable" });
    } else {
      res.status(200).json({ message: "Seat Booked" });
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
  client.close();
};

// const moveSeats = async () => {
//   const client = await MongoClient(MONGO_URI, options);
//   try {
//     await client.connect();
//     const db = client.db("exercise_2");
//     console.log("connected!");

//     console.log("seats", seats);

//     const r = await db.collection("seats").insertMany(seats);
//   } catch (error) {
//     console.log("fuck you", error);
//   }
// };

module.exports = { getSeats, updateSeats };
