import { MongoClient } from "mongodb";

const getClient = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URL);
  return client;
};

export default async function handler(req, res) {
  const { email, name, message } = req.body;
  if (!email || !email.includes("@") || !name || name.trim() === "" || !message || message.trim() === "")
    return res.status(422).json({ message: "Invalid input." });
  try {
    const client = await getClient();
    const result = await client.db().collection("contactMessages").insertOne({ email, name, message });
    client.close();
    return res.status(201).json({ message: "Successfully stored message", data: { id: result.insertedId.toString(), email, name, message } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Could not connect to the database" });
  }
}
