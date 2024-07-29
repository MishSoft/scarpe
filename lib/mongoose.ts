// lib/mongoose.ts
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/";

if (!MONGO_URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env"
  );
}

let cachedClient: mongoose.Mongoose | null = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  // Remove deprecated options
  const client = await mongoose.connect(MONGO_URI, {
    // Options removed: useNewUrlParser: true, useUnifiedTopology: true
  });

  cachedClient = client;
  return client;
}
