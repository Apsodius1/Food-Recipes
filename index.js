import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/text", async (req, res) => {
  const message = await axios.get(
    "https://programming-quotesapi.vercel.app/api/random"
  );
  res.render("index.ejs", { text: message.data });
});

app.listen(3000, () => console.log(`App listening on port ${port}!`));
