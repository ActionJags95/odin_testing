import express from "express";
import path from "node:path";
const staticAssets = "./public";

const app = express();

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.set("views", path.resolve("./views"));
app.set("view engine", "ejs");
app.use(express.static(staticAssets));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.post("/new", (req, res) => {
  messages.push({
    id: crypto.randomUUID(),
    user: req.body.name,
    text: req.body.message,
    added: new Date(),
  });
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const messageId = Number(req.body.messageId);

  const reqMessage = messages.find((message) => message.id === messageId);
  const messageIdx = messages.indexOf(reqMessage);
  messages.splice(messageIdx, 1);

  res.redirect("/");
});

app.listen(8080, "localhost", (err) => {
  if (err) {
    throw new Error(err);
  }

  console.log("App");
});
