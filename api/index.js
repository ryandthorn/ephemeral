// Adapted from https://zeit.co/guides/deploying-a-mongodb-powered-api-with-node-and-now/
import url from "url";
import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;

// Create cached connection variable
let cachedDb = null;

async function connectToDatabase(uri) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb;
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(url.parse(uri).pathname.substr(1));

  // Cache the database connection and return the connection
  cachedDb = db;
  return db;
}

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = await db.collection("data");
  const data = await collection.find({ callLetters: "VCSZ" }).toArray();
  res.status(200).json({ data });
};
