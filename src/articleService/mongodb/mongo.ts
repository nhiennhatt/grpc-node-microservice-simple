import * as mongoose from "mongoose";

export function startMongo() {
  mongoose.connect(process.env.MONGO_URI || "", {
    autoCreate: true,
    user: process.env.MONGO_USERNAME,
    pass: process.env.MONGO_PASSWORD
  }).catch((_) => {
    console.log(_);
  }).then((_) => {
    console.log("MongoDB is connected")
  })
}
