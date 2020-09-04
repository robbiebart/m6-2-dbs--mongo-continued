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

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getSeats = async (req, res) => {};

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

module.exports = { getSeats, moveSeats };
