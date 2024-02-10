import * as mongoose from "mongoose";

export function startMongo() {
  mongoose.connect(process.env.MONGO_URI || "", {
    autoCreate: true,
  }).catch((_) => {
    console.log(_);
  }).then((_) => {
    console.log("MongoDB is connected")
  })
}
