import express from "express";
import { readFileSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/video", (req, res) => {
  const file = `${__dirname}/public/video.mp4`;
  res.sendFile(file);
});

app.listen(4000, () => {
  console.log("Server is Listening on port 4000");
});
