import mongoose from "mongoose";

// interface A {}

/**
 * `connectToDatabase` is used to connect to mongoose
 * and contains all side effects.
 */
const connectToDatabase = () => {
  const { DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

  const connectionString = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@dev.j74jz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

  mongoose.connect(
    connectionString,
    {
      useNewUrlParser: true,
      useFindAndModify: true,
    },
    (err: any) => {
      if (err) {
        console.log("DB Connection Failed!");
      } else {
        console.log("DB Connection was a success :)");
      }
    }
  );

  const db = mongoose.connection;

  return db;
};

export { connectToDatabase };
