import express from "express";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const secretKey = process.env.SECRET_EXAMLE_KEY || "defaultsecret";
  res.send(`Hallo von Backend! Secre Key: ${secretKey}`);
});

app.listen(PORT, () => {
  console.log(`Server läuft auf htt/localhost:{PORT}`);
});
