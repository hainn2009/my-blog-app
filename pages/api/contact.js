export default function handler(req, res) {
  const { emai, name, message } = req.body;
  if (!email || !email.includes("@") || !name || name.trim() === "" || !message || message.trim() === "")
    return res.status(422).json({ message: "Invalid input." });
  return res.status(201).json({ message: "Successfully stored message", data: { email, name, message } });
}
